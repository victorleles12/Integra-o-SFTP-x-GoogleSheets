const converterCsvToJson = require("./convertCsvToJson");
const date = require("../utils/date");

//Função que converte o JSON (criado em convertCsvToJson.js) em array
async function convertJsonToObjectArray() {
  try {
    let jsonData = await converterCsvToJson();
    let data = JSON.parse(jsonData);

    if (data.length == 0) 
      throw "Csv Vazio";
    else
      data.map((e) => (e.dataDeGravacao = date()));
      return data;
  } catch (err) {
    throw err;
  }
}

module.exports = convertJsonToObjectArray;
