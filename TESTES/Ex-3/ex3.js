let nome = ''
let idade = 0
let carta = ""
let carro = ""

nome = prompt("Qual é o seu nome? ")
idade = Number(prompt("Qual sua idade? "))
carta = prompt("Você tem carta de motorista? ")
carro = prompt("Você tem carro? ")

if(idade < 18 || carta === "não"){
    console.log(nome + ", Você não pode dirigir!")
}else if(idade > 18 && carta === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir mas não tem carro =(")
}else{
    console.log(nome + ", você será o motorista :D")
}

