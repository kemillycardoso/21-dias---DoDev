function jantarEspecial() {
    // == igual | != diferente | < menor que | > maior que
    // <= menor ou igual | >= maior ou igual 
    // === é igual o valor e o tipo | !== é diferente o valor e o tipo
    // && (E) as duas condições precisam ser verdadeiras 
    // || (OU) uma das condições precisa ser verdadeira

    // DESAFIO DO DIA #4: 1 - JANTAR ESPECIAL?

    let fome = prompt("Você está com fome?")
    let dinheiro = prompt("Você tem dinheiro?")
    let restaurante = prompt("O restaurante está aberto?")

    if (fome === "não" || dinheiro === "não") {
        console.log("Hoje a janta será em casa!")
    } else if (fome === "sim" && dinheiro === "sim" && restaurante === "não") {
        console.log("Peça um delivery!")
    } else {
        console.log("Hoje o jantar será no seu restaurante preferido!")
    }
}

// jantarEspecial()

// DESAFIO DO DIA #4: 2 - MOTORISTA

function motorista() {
    let nome = prompt("Insira o seu nome:")
    let idade = prompt("Você é maior de idade?")
    let carta = prompt("Você possui carta de motorista?")
    let carro = prompt("Você tem carro?")

    if(idade === "não" || carta === "não") {
        console.log(nome + ", você não pode dirigir")
    } else if(idade === "sim" && carta === "sim" && carro === "não") {
        console.log(nome + ", você pode dirigir mas não tem um carro")
    } else {
        console.log(nome + ", você será o motorista!")
    }
}

// motorista()


