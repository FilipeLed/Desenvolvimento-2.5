const prompt = require("prompt-sync")();

let numero1 = NaN;
let numero2 = NaN;
let res = NaN;
let sobra = NaN;
let operacao;

while (isNaN(numero1)){
    numero1 = parseInt(prompt("Digite o primeiro número?    "));
    numero1 = numero1/1;
} 
while (isNaN(numero2)){
    numero2 = parseInt(prompt("Digite o segundo número?    "));
    numero2 = numero2/1;
} 

operacao = prompt("Digite qual operador aritmética deseja fazer: +   -  /  *    ");

switch (operacao){
    case '+':
        res = numero1 + numero2;
    break;

    case '-':
     res = numero1 - numero2;
    break; 

    case '*':
        res = numero1 * numero2;
    break; 

    case '/':
        if(numero2 === 0){
            console.log("Erro!")
        }
        else{
            res = numero1/numero2;
            if(numero1 > numero2){
            sobra = numero1 % numero2;
            }
            else{
                sobra = 0;
            }
        }
    break

    default:
        console.log("Operação invalida!");

}
console.log(`O resultado é ${res}!`);
if(operacao === '/'){
    console.log(`A sobra é ${sobra}!`);
}
