//1° EXERCICIO
function VerificarIdade(){
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade >= 18){
        resultado.textContent="Voce é maior de idade"
        console.log("voce é de maior")
    } else {
        resultado.textContent="Voce é de menor"
        console.log("voce é de menor")
    }
}

//2° EXERCICIO

function Verificarnumero(){
    const numeros = document.getElementById("numeros").value;

    if (numeros %2==0 ){
        console.log("par");
    } else{
        console.log("impar");
    }
}

//3°  EXERCICIO
function VerificarPositivonegativo(){
    const Numeros = document.getElementById("Numeros").value;
    if (Numeros ==0){
        console.log("zero");
    } else if (Numeros >=1){
        console.log("positivo");
    } else {
        console.log("negativo");
    }
    
}

//4° EXERCICIO


for (let i = 1; i <11; i++) {
    total = 7 * i ;
  console.log(" 7 X " + i + "=" + total);
}
