require("dotenv").config();
const axios = require("axios");
const logText = require("./src/utils/common/commonText")

async function logger(log, file) {
  try {
    let data = JSON.stringify({
      flag: log == null ? logText.flag.acompanhamento : logText.flag.erro,
      cliente: process.env.CLIENT,
      descricao:
        log == null
          ? logText.log[file]
          : logText.erro[file],
      erro: log || "Não houve erro",
      projeto: "cadastra_Integração_MkCloud_DataStudio"
    });

    let config = {
      method: "post",
      url: process.env.LOGGERURL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    let result = await axios(config);
    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = logger;
