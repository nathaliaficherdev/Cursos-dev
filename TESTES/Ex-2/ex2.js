let fome = prompt('Você está com fome? ')
let dinheiro = prompt('Você tem dinheiro? ')
let restaurante = prompt('O restaurante está aberto ou fechado? ')

if(fome === "não" || dinheiro === "não"){
    console.log('Hoje a janta será em casa !')
}else if(dinheiro === "sim" && restaurante === "fechado"){
    console.log('Peça um delivery!')
}
if(dinheiro === "sim" && restaurante === "aberto"){
    console.log('Hoje sua refeição será no seu restaurante preferido =D')
}
