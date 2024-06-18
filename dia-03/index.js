// desafio do dia 3

let nome = prompt("Insira seu nome:")
let idade = prompt("Insira sua idade:")
let altura = prompt("Insira sua altura:")
let peso = prompt("Insira seu peso:")

let anoNascimento = 2024 - idade
let imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc.toFixed(2) + "kg/m²")
