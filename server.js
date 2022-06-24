const express = require("express");
const getArchiveCsv = require("./src/model/getSftpData.js");
const PostDataInGoogleSheets = require("./src/model/postGoogleSheetsData.js");
const schedule = require("./src/utils/schedule")
const app = express();
require ("dotenv");

let porta = process.env.PORT;
if (porta == null || porta == "") porta = 8000;

app.get("/v1/postInGoogleSheets", async (req, res) => {
  try {
    await schedule(getArchiveCsv, PostDataInGoogleSheets, process.env.PERIODICIDADE);
    res.json({ code: 200, message: "processo realizado com sucesso" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(porta, () => {
  console.log(`servidor rodando na porta ${porta}`);
});
