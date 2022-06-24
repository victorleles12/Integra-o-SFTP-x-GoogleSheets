const getCsv = require("./src/model/getSftpData");
const PostDataInGoogleSheets = require("./src/model/postGoogleSheetsData");
require("dotenv").config();

const schedule = require("./src/utils/schedule.js");

async function run() {
  try {
    if (process.env.PERIODICIDADE) 
      schedule(getCsv, PostDataInGoogleSheets, process.env.PERIODICIDADE);
    else 
      await getCsv(PostDataInGoogleSheets);
  } catch (err) {
    console.log(err);
  }
}

run();
