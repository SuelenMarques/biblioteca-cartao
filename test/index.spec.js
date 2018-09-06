const chai = require("chai");
const expect = chai.expect;
const cardFunction = require("../index");
const cardValidator = cardFunction.cardValidator;


describe ("cardValidator()", () => {

  describe("Quando o numero for um inteiro e for um cartão válido", () => {
    it("Deveria retornar true", () => {
      expect(cardValidator(36490102462661)).equal(true);
    });
  });

  describe("Quando o numero for um cartão de crédito inválido", () => {
    it("Deveria retornar false", () => {
      expect(cardValidator(5234210238823905)).equal(false);
    });
  });

  describe("Quando não for um número", () => {
    it("Deveria me retornar um erro", () => {
      let caracterInvalid = function () { cardValidator("socorrogente"); };
      expect(caracterInvalid).to.throw("Erro: Somente números são válidos.");
    });
  });

  describe("Quando estiver vazio", () => {
    it("Deveria me retornar um erro", () => {
      let nullNumber = function () { cardValidator( ); };
      expect(nullNumber).to.throw("Erro: parâmetro vazio");
    });
  });

  describe("Quando houver um dígito.", () => {
    it("Deveria me retornar um erro", () => {
      let oneDigit = function () { cardValidator(1); };
      expect(oneDigit).to.throw("Erro: O número não é válido.");
    });
  });

});