require("dotenv").config;
const jsonData = require("../controller/convertJsonToObjectArray");
const logger = require("../../logger");
const getDoc = require("../utils/googleConfig");

//Função para dash que adiciona os dados na planilha
async function PostDataInGoogleSheets() {
  let headRows;
  let dataObject;
  let log;

  try {
    try {
      dataObject = await jsonData();
      headRows = dataObject.map((e) => Object.keys(e));

      let doc = await getDoc();
      let sheet = doc.sheetsById[process.env.SHEET_ID];

      //Se ADDOROVER for igual a "overwrite", limpa a planilha
      if (process.env.ADDOROVER == "overwrite") await sheet.clear(dataObject);

      await sheet.setHeaderRow(headRows[0]);
      await sheet.addRows(dataObject);
      console.log("Dados salvos no sheets");
    } catch (err) {
      log = err.message;
      throw err;
    } finally {
      await logger(log, "postGoogleSheetsData");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = PostDataInGoogleSheets;
