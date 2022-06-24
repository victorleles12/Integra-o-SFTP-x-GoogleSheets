// Esse programa faz: Pega o arquivo "process.env.FILE_NAME" do sftp, gera e coloca no arquivo "dados_'+process.env.CLIENT+'.csv"

const Client = require("ssh2-sftp-client");
const logger = require("../../logger");
require("dotenv").config();
const logText = require("../utils/common/commonText");

async function getArchiveCsv(callback) {
  let remotePath = process.env.FILE_NAME;
  let destinePath = "src/utils/download/dados_" + process.env.CLIENT + ".csv";

  let sftp = new Client();

  let log;

  try {
    try {
      await sftp.connect({
        host: process.env.HOST,
        username: process.env.USUARIO,
        password: process.env.SENHA,
        algorithms: {
          kex: ["diffie-hellman-group14-sha1"], //Essa é uma chave para comunicação com sftp
        },
      });
      await sftp.fastGet(remotePath, destinePath);
      console.log(logText.log.getSftpData);
      await sftp.end();
      await callback();
    } catch (err) {
      log = err.message;
      throw err;
    } finally {
      await logger(log, "getSftpData");
    }
  } catch (err) {
    throw err;
  }
}

module.exports = getArchiveCsv;
