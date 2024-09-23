const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");

API_KEY = "AIzaSyAa0PhRJ7_dYyw9NDaF1bU9cix3h8fduCg";

// ------------ DB CONNECTIONS ------------

const { BigQuery } = require("@google-cloud/bigquery");

const bigquery = new BigQuery();

GOOGLE_APPLICATION_CREDENTIALS =
  "./lcl-hackathon-e9-sbox-4dba-e7929543c78b.json";

process.env.GOOGLE_APPLICATION_CREDENTIALS = GOOGLE_APPLICATION_CREDENTIALS;

async function getClientContext(clientId) {
  const sqlquery = `SELECT * 
                 FROM \`lcl-hackathon-e9-sbox-4dba.clients.Client\` c
                 WHERE \`ID client\` = @clientId`;

  const options = {
    query: sqlquery,
    params: { clientId: clientId },
  };

  // Run the query
  const [rows] = await bigquery.query(options);
  //   rows.forEach((row) => console.log(row));

  return rows;
}

// console.log(getClientContext("1"));

// --------- ENDPOINTS ------------

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.post("/send", async (req, res) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: {
      parts: [
        {
          text: "En se basant sur le contexte fournit et rien d'autre, dis obligatoirement que une suggestion de produits parmis la liste suivante: (Compte courant classique, Compte courant premium, Compte courant pour jeunes, Compte courant pour étudiants, Livret A, Livret de Développement Durable et Solidaire (LDDS), Livret Jeune, Livret d'Épargne Populaire (LEP), Compte sur Livret, Plan d'Épargne Logement (PEL), Compte Épargne Logement (CEL), Carte Visa Classic, Carte Visa Premier, Carte Visa Infinite, Carte MasterCard Standard, Carte MasterCard Gold, Carte MasterCard Platinum, Carte American Express, Crédit immobilier, Crédit à la consommation, Prêt personnel, Prêt auto, Prêt travaux, Prêt étudiant, Crédit renouvelable, Assurance emprunteur pour crédit immobilier, Assurance emprunteur pour crédit à la consommation, Compte Titres, Plan d'Épargne en Actions (PEA), PEA-PME, Assurance-vie, Contrat de capitalisation, Service de gestion de patrimoine, Conseil en investissement, Service de change, Service de transfert d'argent, Service de gestion de compte en ligne, Assurance-vie en euros, Assurance-vie en unités de compte, Assurance-vie multisupport, Assurance multirisque habitation, Assurance habitation pour locataires, Assurance habitation pour propriétaires non-occupants, Assurance auto tous risques, Assurance auto au tiers, Assurance auto au tiers plus, Assurance auto pour jeunes conducteurs, Complémentaire santé individuelle, Complémentaire santé familiale, Complémentaire santé pour seniors, Assurance décès, Assurance invalidité, Assurance perte d'emploi, Assurance dépendance, Assurance annulation de voyage, Assurance rapatriement, Assurance bagages, Assurance multirisque voyage, Assurance responsabilité civile professionnelle, Assurance multirisque professionnelle, Assurance perte d'exploitation, Assurance flotte automobile, Assurance scolaire, Assurance pour animaux de compagnie, Assurance pour objets de valeur, Assurance pour événements spéciaux (mariage))",
        },
      ],
    },
  });

  const { message } = req.body;
  queryResult = await getClientContext(message);
  if (queryResult.length == 0) {
    res.json({
      reply: "Ce client n'existe pas, veuillez vérifier l'ID client",
    });
    return;
  }

  console.log(queryResult[0]);

  prompt = `Contexte du client:\n` + JSON.stringify(queryResult[0]);

  console.log(prompt);

  const result = await model.generateContent(prompt);

  res.json({
    reply: `En se basant sur les données clients, le(s) produit(s) qui peuvent l'intéresser:\n${result.response.text()}`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
