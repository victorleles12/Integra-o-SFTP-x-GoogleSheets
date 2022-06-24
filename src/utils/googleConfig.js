require("dotenv").config;
const { GoogleSpreadsheet } = require("google-spreadsheet");
const logger = require("../../logger");


const getDoc = async () => {
  let log;
  try{
    try{
      const doc = new GoogleSpreadsheet(process.env.SHEETS_KEY);
    
      await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      });
    
      await doc.loadInfo();
      return doc;
    
    }catch(err){
      log = err.message;
      throw err;
    }finally{
      logger(log, "googleConfig")
    }

  }catch(err){
    console.log(err.message)
  }
};

module.exports = getDoc;
