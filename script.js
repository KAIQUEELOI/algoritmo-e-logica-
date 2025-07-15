// Multiplicação
const n5 = 9;
const n6 = 6;
const mult = n5 * n6; 
console.log(mult); 

// Divisão
const di1 = 144;
const di2 = 12;
const valo = di1 / di2;
console.log(valo); 


// Resto 
const r1 = 55;
const r2 = 6;
const r3 = r1 % r2; 
console.log(r3); 

// Incremento (
let x = 10;
x++;
console.log(x); 
// 
let y = 5;
y--; 
console.log(y); 
// Desafio 8 
const s1 = 5;
const s2 = 10;
const s3 = 3;
const s4 = 2;
let funcao8 = (s1 + s2 - s3) * s4;
console.log(funcao8);

// Desafio 9 
const m1 = 8;
const m2 = 7.5;
const m3 = 10;
let media = (m1 + m2 + m3) / 3; 
console.log(media);

// Desafio 10 (correto)
let a = 20;
let b = 5;
a += b; // a = 25
a *= 2; // a = 50
console.log(a); 

// Verificação de igualdade (==)
let igualdade = 10 == 7;
console.log(igualdade); 

// Verificação de igualdade (==) (nome da variável corrigido)
let igualdade2 = 5 == 3;
console.log(igualdade2); 

let sete = 7 == '7'; // true (coerção de string para número)
console.log(sete);

// Desafio 14 (!== sem coerção de tipo)
let dez = 10 !== '10'; 

console.log(dez); // Resultado correto: true
// 15. Avalie (5 > 3) && (8 < 10)
console.log((5 > 3) && (8 < 10)); 


// 16. Avalie (5 < 3) || (8 === 8)
console.log((5 < 3) || (8 === 8)); 

// 17. Avalie !(7 > 2)
console.log(!(7 > 2)); 

// 18. Faça (4 + 3) * 2 e compare com 4 + 3 * 2
console.log((4 + 3) * 2); 
console.log(4 + 3 * 2);

// 19. Calcule o resultado de 2 ** 4
console.log(2 ** 4);

// 20. Avalie: ((10 + 2) / 2) ** 2
console.log(((10 + 2) / 2) ** 2);

// 21. Verifique se a soma de 4 + 4 é igual ao produto de 2 * 4
console.log((4 + 4) === (2 * 4));

// 22. Expressão com 3 membros que retorne false usando ==, !, &&
console.log(!(5 == 5) && true);

// 23. Expressão com 4 membros que retorne true usando ||, !==, números
console.log((5 !== '5') || (10 > 5) || (3 < 2) || (7 === 7)); // true

// 24. Calcule: 5 + 3 * 2 ** 2
console.log(5 + 3 * 2 ** 2); // 17


// 25. Faça let r = 3; r += 2 * 4; e depois r /= 2
let r = 3;
r += 2 * 4; // r = 3 + 8 = 11
r /= 2; // r = 11 / 2 = 5.5
console.log(r); // 5.5

// 26. Crie strings nome = "Ana" e sobrenome = "Silva", e junte com espaço
let nome = "Ana";
let sobrenome = "Silva";
console.log(nome + " " + sobrenome);

// 27. Avalie: ("5" + 5) == 55
console.log(("5" + 5) == 55); 

// 28. Teste: true && false || true
console.log(true && false || true); 

// 29. Expressão com operadores aritméticos, comparação e lógica que resulte em true
console.log((2 + 3) === 5 && 10 > 5); // true

// 30. Calcule o valor final da expressão e explique cada operação
let resultado = (10 + 5 * 2) > (30 / 2) && !false;
console.log(resultado); // true
