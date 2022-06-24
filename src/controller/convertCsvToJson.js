const csvToJson = require("convert-csv-to-json");

// Essa função converte o csv "dados_'+process.env.CLIENT+'.csv" (criado no getSftpData.js) em json
async function converterCsvToJson() {
  let csvPath = "src/utils/download/dados_" + process.env.CLIENT + ".csv";

  try {
    let jsonCsvData = await csvToJson
      .utf8Encoding()
      .fieldDelimiter(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/gm)
      .formatValueByType()
      .getJsonFromCsv(csvPath);

    let correctJson = JSON.stringify(jsonCsvData)
      .replace(/\\"/g, "")
      .replace(/(?<=\d)\.(?=\d)/g, ",");

    return correctJson;
  } catch (err) {
    throw err;
  }
}

module.exports = converterCsvToJson;
