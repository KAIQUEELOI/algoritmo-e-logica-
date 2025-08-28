//01//


    prompt                       // permite que o usuario possa interagir com o "sitema"
    console.log(" alguma coisa") //utilizado para "mostrar" mensagens ao usuarios 

//muitas das vezes pode montar sistemas para interaçao de usuario e maquina com o bun utilizando prompt e console.log

parseInt         //transforma toda a "entrada/saida em numeros inteiros"
parseFloat        //transforma toda a "entrada/saida em resultados verdadeior ou falso/"


//02//


//03//
const d1 = parseFloat(prompt("Digite sua primeira nota:"));
const d2 = parseFloat(prompt("Digite sua segunda nota:"));
const d3 = parseFloat(prompt("Digite sua terceira nota:"));

let media = (d1 + d2 + d3) / 3;

console.log("Sua média é =>", media);
alert("Sua média é => " + media.toFixed(2));

//04//

function A (){
    24
}
function  B (){
    8
}

const subtracao = function(A,B){
    return A - B
}


//05//

const m1 = parseFloat(prompt("Digite sua primeira nota:"));
const m2 = parseFloat(prompt("Digite sua segunda nota:"));
const m3 = parseFloat(prompt("Digite sua terceira nota:"));


function nota (Media){

   let Media = (m1 + m2 + m3)/3
   return Media
}

let resultado = nota(Media)
console.log("sua media é:", resultado )


//006//

const contador = parseInt(prompt("escreva um valor e descubra o valor de seu quadrado:"));

function quadrado (n){
    return n ** 2
}

let Resultado = quadrado(numero)

console.log("o quadrado de seu numero é:", Resultado )

//07//

let idade = 17

function somaIdade(n) {
    let somaIdade = n + 10
    return console.log("sua idade nova é:",somaIdade)
}

console.log("sua idade é:", idade)
let idade2 = somaIdade(n)
console.log("sua idade através da funçao é:",idade2);

//08//
 
 n = 20
 let quadrador

if (n >= 20){
    quadrador = n + 4**2
    console.log("seu valor é", quadrador);
}

console.log("acessando de fora", quadrador);





//////////09///////////////
//
const d1 = parseFloat(prompt("Digite sua primeira nota:"));
const d2 = parseFloat(prompt("Digite sua segunda nota:"));
const d3 = parseFloat(prompt("Digite sua terceira nota:"));

let media = (d1 + d2 + d3) / 3;

console.log("Sua média é =>", media);
alert("Sua média é => " + media.toFixed(2));

//


// 
const A = () => 24
const B = () => 8

const subtracao = (a, b) => a - b

console.log("Subtração:", subtracao(A(), B()))


// 

const m1 = parseFloat(prompt("Digite sua primeira nota:"));
const m2 = parseFloat(prompt("Digite sua segunda nota:"));
const m3 = parseFloat(prompt("Digite sua terceira nota:"));

const nota = () => (m1 + m2 + m3) / 3

let resultado = nota()
console.log("Sua média é:", resultado)


//


const numero = parseInt(prompt("Escreva um valor e descubra o valor de seu quadrado:"));

const quadrado = n => n ** 2

let Resultado = quadrado(numero)
console.log("O quadrado do seu número é:", Resultado)


// 



let idade = 17

const somaIdade = n => n + 10

console.log("Sua idade é:", idade)
let idade2 = somaIdade(idade)
console.log("Sua idade através da função é:", idade2)


// 



let n = 20
let quadrador

if (n >= 20) {
    quadrador = (() => n + 4 ** 2)() // arrow function auto-executada
    console.log("Seu valor é", quadrador)
}

console.log("Acessando de fora", quadrador)


//10//

function caucularMedia(M1, M2){
    return M1 + M2/2 
}

const M1 = parseFloat(prompt("Digite o primeiro número:"));
const M2 = parseFloat(prompt("Digite o segundo número:"));

const Media = calcularMedia(M1, M2);

console.log("A média é:", media);

//11//


function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}


function exibirResultado(operacao, resultado) {

    console.log(`O resultado da ${operacao} é: ${resultado}`);

    alert(`O resultado da ${operacao} é: ${resultado}`);
}

const n1 = parseFloat(prompt("Digite o primeiro número:"));
const n2 = parseFloat(prompt("Digite o segundo número:"));
const escolha = prompt("Escolha a operação: +, -, *, /");


let resultado;

switch (escolha) {
    case "+":
        resultado = adicao(n1, n2);
        exibirResultado("adição", resultado);
        break;
    case "-":
        resultado = subtracao(n1, n2);
        exibirResultado("subtração", resultado);
        break;
    case "*":
        resultado = multiplicacao(n1, n2);
        exibirResultado("multiplicação", resultado);
        break;
    case "/":
        resultado = divisao(n1, n2);
        exibirResultado("divisão", resultado);
        break;
    default:
        alert("Operação inválida!");
}


//12//

const { peso, altura } = lerDados();
const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);
exibirResultado(imc, classificacao);


function lerValor() {
    return parseFloat(prompt("Digite o valor em Reais (R$):"));
}

function converterParaDolar(valorReais, taxaCambio) {
    return valorReais / taxaCambio;
}


function exibirResultado(valorReais, valorDolar) {
    console.log(`R$ ${valorReais.toFixed(2)} equivalem a US$ ${valorDolar.toFixed(2)}`);
}

const taxaCambio = 5.00; 
const valorReais = lerValor();
const valorDolar = converterParaDolar(valorReais, taxaCambio);
exibirResultado(valorReais, valorDolar);


function lerDados() {
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    return { peso, altura };
}


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function exibirResultado(imc, classificacao) {
    console.log(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);

    alert(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
}


//13//
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Pontuação inicial//
let pontos = 100;
let acertou = false;

alert("🎮 Bem-vindo ao jogo de adivinhação!\n\nTente adivinhar o número secreto (1 a 100).\nVocê começa com 100 pontos.");

// Laço do jogo//
while (!acertou) {
    let palpite = parseInt(prompt("Digite seu palpite (1 a 100):"));

    // Se o jogador acertar//
    if (palpite === numeroSecreto) {
        acertou = true;
        alert(`🎉 Parabéns! Você acertou o número secreto (${numeroSecreto}).\nSua pontuação final é: ${pontos} pontos.`);
        console.log(`Jogador acertou! Número secreto = ${numeroSecreto}, Pontuação = ${pontos}`);
    } else {
        pontos--; // perde 1 ponto//
        if (palpite > numeroSecreto) {
            alert(`❌ Errado! O número secreto é MENOR que ${palpite}.\nPontuação atual: ${pontos}`);
        } else {
            alert(`❌ Errado! O número secreto é MAIOR que ${palpite}.\nPontuação atual: ${pontos}`);
        }
    }
}