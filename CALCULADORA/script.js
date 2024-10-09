
// CALCULADORA 
function calculadora( a , b, operacao){
    if (operacao == "soma"){
        return console.log(a + b)
    };
    if (operacao == "multiplicacao"){
        return console.log(a * b)
    };
    if (operacao == "divisao"){
        return console.log(a / b)
    };
    if (operacao == "subtracao"){
        return console.log(a / b)
    } else {
        return console.log ("Operação Invalida")
    };
}

calculadora(3, 5, "soma");
calculadora(3, 5, "multiplicacao");
calculadora(3, 5, "subtracao");
calculadora(3, 5, "divisao");
calculadora(3, 5, "potencia");