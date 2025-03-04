let num1 = Number(prompt("Digite um número: "))
let operação = prompt("Escolha uma operação: + - / *")
let num2 = Number(prompt("Digite outro numero: "))


switch(operação){

    case '+': 
    console.log(num1 + " + " + num2 + ' = ' + (num1 + num2))
    break;

    case '-':
        console.log(num1 + " - " + num2 + ' = ' + (num1 - num2))
        break;

    case '*':
        console.log(num1 + " * " + num2 + ' = ' + (num1 * num2))
        break;

    case '/':
            console.log(num1 + " / " + num2 + ' = ' + (num1 / num2))
            break;
}