let opcao = prompt("Escolha: 1 - Gasolina, 2 - Álcool ou 3 - Calibrar pneus?")

switch (opcao) {
    case "1":
        let valorgasolina = Number(prompt("Qual o valor que deseja abastecer?"))
        let resultado = valorgasolina / 5
        console.log(resultado + " litros de gasolina foram abastecidos com sucesso :D ")
        break;

    case "2":
        let valoralcool = Number(prompt("Qual o valor que deseja abastecer?"))
        let total = valoralcool / 3
        console.log(total + " litros de álcool foram abastecidos com sucesso :D")
        break;

    case "3":
        console.log("Pneus calibrados com sucesso :D")
        break;

    default:
        console.log("Opção invalida, escolha uma das opções 1, 2 ou 3 :D")



}