// código del cuadrado
console.group("cuadrados");

const LADO_CUADRADO = 5;
console.log(`Los lados del cuadrado miden: ${LADO_CUADRADO} unidades`);

const PERIMETRO_CUADRADO = LADO_CUADRADO * 4;
console.log(`El perímetro del cuadrado es: ${PERIMETRO_CUADRADO} unidades`);

const AREA_CUADRARO = LADO_CUADRADO * LADO_CUADRADO;
console.log(`El área del cuadrado es: ${AREA_CUADRARO} unidades cuadradas`);
console.groupEnd();

// código del triángulo
console.group("triángulos");

const LADO_TRIANGULO1 = 6;
const LADO_TRIANGULO2 = 6;
const BASE_TRIANGULO = 4;
const ALTURA_TRIANGULO = 5.5;

console.log(
    `Los lados del triángulo miden: 
    ${LADO_TRIANGULO1} unidades, 
    ${LADO_TRIANGULO2} unidades, 
    ${BASE_TRIANGULO} unidades`
);

const PERIMETRO_TRIANGULO = 
LADO_TRIANGULO1 + 
LADO_TRIANGULO2 + 
BASE_TRIANGULO;

console.log(`El perímetro del triángulo es: ${PERIMETRO_TRIANGULO} unidades`);

const AREA_TRIANGULO = (BASE_TRIANGULO * ALTURA_TRIANGULO) / 2;
console.log(`El área del triángulo es: ${AREA_TRIANGULO} unidades cuadradas`);
console.groupEnd(); 

// código del círculo
console.group("círculos");

const RADIO_CIRCULO = 4;
const PI = Math.PI;

console.log(
    `El radio del círculo es de: ${RADIO_CIRCULO} unidades,
    el valor de pi es de : ${PI}`
);

const PERIMETRO_CIRCULO = PI * (RADIO_CIRCULO * 2);
console.log(`El perímetro o la circunferencia del círculo es: ${PERIMETRO_CIRCULO} unidades`);

const AREA_CIRCULO = PI * (RADIO_CIRCULO *RADIO_CIRCULO);
console.log(`El área del círculo es: ${AREA_CIRCULO} unidades cuadradas`);
console.groupEnd(); 