require("dotenv");

module.exports = {
  erro: {
    getSftpData: "Erro gerado no arquivo getSftpData",
    postGoogleSheetsData: "Erro gerado no arquivo postGoogleSheetsData",
    schedule: "Erro gerado no arquivo schedule",
    googleConfig: "Erro ao conectar à api do Google"
  },
  log: {
    getSftpData: "csv baixados com sucesso",
    postGoogleSheetsData: "Dados salvos no sheets",
    scheduleSucess: `Dados sendo gravados no modo ${process.env.ADDOROVER} na planilha`,
    scheduleFailed: `A aplicação roda apenas no dia ${process.env.PERIODICIDADE} de cada mês`,
    googleConfig: "Conectado à api do Google com sucesso"
  },
  flag: {
    erro: "Erro",
    acompanhamento: "Acompanhamento"
  }
};
