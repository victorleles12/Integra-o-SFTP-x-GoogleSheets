function corretlyDate() {
  let data = new Date();

  let year = data.getFullYear();
  let day = data.getDate();
  let month = data.getMonth() + 1;

  let corretlyDate = `${year}-${month}-${day}`;

  return corretlyDate;
}

// console.log(corretlyDate())
module.exports = corretlyDate;
