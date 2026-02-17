// Variáveis
var variavelDeEscopoGlobal = "NUNCA USE ESSE TIPO!";
let variavelDeEscopoDeBloco = "Melhor que var!";
const constanteEscopoDeBloco = "valores imutáveis!";

// a convenção é sempre tentar usar const ao invés de let, só mudar para let quando for precisar trocar o valor
// use nomes em inglês com nomes explicativos (mesmo que longos)

console.log(
  variavelDeEscopoGlobal,
  variavelDeEscopoDeBloco,
  constanteEscopoDeBloco,
);

// Entrada de dados com node

const readline = require("node:readline"); // readline é um módulo nativo do nodejs usado para ler dados do terminal (node: deixa isso explicito)

// acessando o método createInterface de comunicação com o terminal para entrada e saída
const prompt = readline.createInterface({
    // objeto com as configurações da interface
  input: process.stdin, // input vai receber stdin é standard input (entrada padrão do sistema)
  output: process.stdout, // “Standard Output" que é a saída padrão do sistema
});

let name; // variavel que recebera o nome

// acessando método question do módulo readline que mostra a pergunta no terminal e chama uma função que recebe o parametro answer (função callback - executada depois que o usuário digita algo)
prompt.question("Digite seu nome: ", (answer) => {
    // a função executa:
  name = answer; // atribui o valor a variavel
  prompt.close(); // fecha o prompt
});

// acessando o método on que é usado para ouvir um evento, ele executa uma função callback depois de ouvir o evento close e essa função executa o console.log()
prompt.on("close", () => {
  console.log(`Seja bem vindo, ${name}!`);
});
