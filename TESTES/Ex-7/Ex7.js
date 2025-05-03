let n = Number(prompt('Digite um numero: '))

for(let tab = n; tab <= n + 2; tab++){
    console.log("tabuada: " + tab)
    for(let n2 = 0; n2 <= 10; n2++){
        console.log(tab + " x " + n2 + " = " + (n*n2))
    }
}