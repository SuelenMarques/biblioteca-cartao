# Validador de Cartão de Crédito v.1.0.0

**Biblioteca destinada a validar números de cartões de crédito utilizando o algoritmo de Luhn.**


## Os métodos utilizados na biblioteca são:

#### **cardValidator(numberCard);**

Exemplo de uso:

```
$node
> let validator = require("biblioteca-cartao")
> validator.cardValidator(36490102462661);
//'true'
```


## versão 1.0.0

- Verifica se um número de cartão de crédito é válido ou não, retornando true ou false.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install biblioteca-cartao`


## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- Implementação de validação do código verificador e validade do cartão;

#### versão 2.0.0 (previsão outubro/2018)
- Implementação de identificações de outras bandeiras com configurações diversas;
- README translated to english;

#### versão 1.0.0 (released)
- Verifica se um número de cartão de crédito é válido ou não, retornando true ou false.
