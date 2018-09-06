const error = numberCard => {

  if (numberCard == null) {
    throw new Error("Erro: parâmetro vazio");
  } 

  if (typeof numberCard !== "number") {
    throw new Error("Erro: Somente números são válidos.");
  }

  if (numberCard.toString().length === 1) {
    throw new Error("Erro: O número não é válido.");
  }
};

const calculation = (value, index) => {
  return (index % 2 == 1) ? (value * 2 > 9) ? value * 2 - 9  : value * 2 : value;
};
exports.cardValidator = numberCard => {
  error(numberCard);
  let result = numberCard.toString().split("").reverse().reduce(
    (acum, value, index) => acum + calculation(parseInt(value), index), 0 
  );
  return result % 10 === 0 ? true : false;
};


 
