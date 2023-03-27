//EXERCICIO 1
function subtracaonumeros() {
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let calculo = (n1 - n2)

    document.getElementById("resultado").innerHTML = "Resultado da Subtração: " + calculo
}

//EXERCICIO 2
function multiplicacaonumeros() {
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)

    let resultado_multiplicacao = (n1 * n2 * n3)

    document.getElementById("resultadomultiplicacao").innerHTML = "Resultado da multiplicacao: " + resultado_multiplicacao
}

//EXERCICIO 3
function divisaonumeros() {
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    
    
    if (n2 != 0){
        let resultado_divisao = (n1 / n2)

        document.getElementById("resultadodivisao").innerHTML = "Resultado da divisão: " + resultado_divisao
    }
    else{
        document.getElementById("resultadodivisao").innerHTML = "O segundo número tem que ser diferente de 0"
    }
}

//EXERCICIO 4
function medianumeros() {
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let resultado_media = ((n1 * 2) + (n2 * 3)) / 5

    document.getElementById("resultadomedia").innerHTML = "A média entre os números é: " + resultado_media
}

//EXERCICIO 5
function novoprecoproduto() {
    let preco = Number (document.getElementById("preco").value)

    let novo_preco = preco - (preco * 0.1)

    document.getElementById("novopreco").innerHTML = "Novo preço com desconto de 10%: " + novo_preco + " R$"
}

//EXERCICIO 6
function calculasalario() {
    let salario = Number (document.getElementById("salariofixo").value)
    let vendas  = Number (document.getElementById("valorvendas").value)

    let salario_final = salario + (vendas * 0.04)

    document.getElementById("salariofinal").innerHTML = "O salário final do funcionário é: " + salario_final + " R$"
    document.getElementById("comissao").innerHTML = "A comissão das vendas é: " + vendas * 0.04 + " R$"
}

//EXERCICIO 7
function calculopeso() {
    let peso = Number (document.getElementById("peso").value)

    let calculorengordar = peso + (peso * 0.15)
    let calculoemagrecer = peso - (peso * 0.20)

    document.getElementById("novopeso15").innerHTML = "Se a pessoa engordar 15%, ela terá: " + calculorengordar + " KG"
    document.getElementById("novopeso20").innerHTML = "Se a pessoa emagrecer 20%, ela terá: " + calculoemagrecer + " KG"
}

//EXERCICIO 8
function calculograma() {
    let peso = Number (document.getElementById('peso').value)

    let conversao = (peso * 1000)

    document.getElementById('resultado').innerHTML = "O peso em gramas é: " + conversao + " G"
}

//EXERCICIO 9
function calculoarea() {
    let basemenor = Number (document.getElementById('basemenor').value)
    let basemaior = Number (document.getElementById('basemaior').value)
    let altura = Number (document.getElementById('altura').value)
    
    let resultado_area = ((basemenor + basemaior) * altura) / 2

    document.getElementById('resultadoarea').innerHTML = "A área do trapézio é: " + resultado_area
}

//EXERCICIO 10
function calculoareaquad() {
    let lado = Number (document.getElementById('lado').value)

    let calculo_area_quadrado = (lado * lado)

    document.getElementById("resultadoareaquad").innerHTML = "A área do quadrado é: " + calculo_area_quadrado
}