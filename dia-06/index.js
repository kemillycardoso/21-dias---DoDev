// i++ é incrementação do index
// contador: ++ ou -- (sempre vai ser +1 ou -1)
// += ou -= (o valor pode ser definido)

// DESAFIO DO DIA #6: LISTA DE EXERCÍCIOS

function exercicio01 () {

    let numero = Number(prompt("Digite um número"))

    for (let i = 0; i <= numero; i++) {
        console.log(i)
    }
}
// exercicio01() 

function exercicio02 () {

    for(let contador = 0; contador <= 50; contador += 5) {
        console.log(contador)
    }       
}
// exercicio02()

function exercicio03 () {

    for(let contador = 50; contador >= 0; contador -= 5) {
        console.log(contador)
    }
}
// exercicio03()

function exercicio04 () { 

    let tabuada = parseInt(prompt("Escolha a tabuada que você deseja"))

    for(let i = tabuada; i <= tabuada + 2; i++) {
        console.log(i)
        for (let j = 0; j <= 10; j++)
            console.log(i + " x " + j + " = " + (i * j))

    }
}
// exercicio04()


