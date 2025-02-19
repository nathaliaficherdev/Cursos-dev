let nome =""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Qual é o seu nome?")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Qual é sua altura? "))
peso = parseInt(prompt("Qual é seu peso? "))

let anoDoNascimento = 0
anoDoNascimento = 2025 - idade

let IMC = 0
IMC = parseInt(peso / (altura*altura))

console.log("Oi, meu nome é " + nome + " tenho " + idade + " anos, nasci em " + anoDoNascimento + ". Tenho " + altura + " de altura, peso " + peso + "kg e meu IMC é " + IMC + "kg/m².")