// DESAFIO DIA #5: 1 - CALCULADORA DODEV

function calculadoraDoDev () {
    let numero1 = parseInt(prompt("Insira um número"))
    let numero2 = parseInt(prompt("Insira outro número"))
    let operacaoMat = prompt("Escolha a operação matemática: \n" + "+" + "\n" + "-" + "\n" + "*" + "\n" + "/")

    switch (operacaoMat) {
        case "+":
            console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
            break
        case "-":
            console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
            break
        case "*": 
            console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2))
            break
        default:
            console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2))
            break
    }
}

// calculadoraDoDev()

// DESAFIO DIA #5: 2 - DODEV THRU 

function dodevThru () {
    let opcoes = prompt("Seja bem-vindo(a)! O que você deseja? \n" + "Abastecer com gasolina" + "\n" + "Abastecer com álcool" + "\n" + "Calibrar os pneus")
  
    switch (opcoes) {
        case "gasolina": 
            let valorGasolina = prompt("Insira o valor desejado")
            console.log("Você abasteceu " + (valorGasolina / 5) + " litros.")
            break
        case "alcool":
            let valorAlcool = prompt("Insira o valor desejado") 
            console.log("Você abasteceu " + (valorAlcool / 3).toFixed(1) + " litros.")
            break
        case "calibrar": 
            console.log("Pneus calibrados com sucesso!")
            break
        default:
            console.log("Até mais!")
            break
    }
}

// dodevThru ()
