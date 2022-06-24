const logger = require("../../logger");
require("dotenv");

function dayOfMonth() {
  let data = new Date();
  let day = String(data.getDate()).padStart(2, "0");
  return day;
}

function schedule(callback1, callback2, dia) {
  let msg = "schedule";
  let log;
  try {
    let day = dayOfMonth();
    if (day == dia) {
      msg = "scheduleSucess";
      callback1(callback2);
    } else {
      msg = "scheduleFailed";
    }
  } catch (err) {
    log = err.message;
    throw err
  } finally {
    logger(log, msg);
  }
}

module.exports = schedule;
