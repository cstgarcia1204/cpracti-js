// código del cuadrado
console.group("cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// código del triángulo
console.group("triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 +base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd(); 

// código del círculo
console.group("círculos");
const PI = Math.PI;

//Diamétro
function diametroCirculo(radio) {
    return radio *2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return PI * diametro;
}

function areaCirculo(radio) {
    return PI * (radio * radio);
} 

console.groupEnd(); 
