// código del cuadrado
console.group("cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// código del triángulo isósceles
console.group("triángulos");
function validacionValorBase(lado,base){
    /*Se tiene que validar que los valores de lado
    y base del triangulo isósceles sean los correspondientes
    a las propiedades de los triangulos.
    Se valida la ley de los tiangulos que dice:
    La suma de los dos lados del triangulo isósceles debe ser mayor
    a la base. 
    */
    var dobleLado = lado * 2;
    var maximoValorBase = dobleLado -1;

    if (dobleLado > base) {
        return {
            base: parseFloat(base),
            maximoValorB: maximoValorBase
        };
    } else {
        return {
            base: 0,
            maximoValorB: maximoValorBase
        };
    }
}
function perimetroTrianguloIso(lado, base) {
    var valorBaseValid = validacionValorBase(lado, base);
    if (valorBaseValid.base > 0){
        var perimetro = (lado * 2)+ base;
        
        return parseFloat(perimetro);
    } else {
        return valorBaseValid;
    }
    
}

function alturaTrianguloIso(lado, base) {
    /* 
    Teorema de Pitágoras  c^2 = a^2 + b^2 , es decir, 
    la hipotenusa al cuadraro es igual a la suma de los
    catetos al cuadrado. 
    En este caso la letra c representa la hipotenusa 
    y el cateto b la altura del triangulo rectangulo, 
    y el cateto a la base del triángulo rectangulo.
    a  que es la base, se divide en dos para poder sacar
    del triangulo isósceles el triángulo rectangulo
    */

    var a = base/ 2;
    var c = lado;
    //encontrar la altura o sea el cateto b
    //fórmula para encontrar el cateto b = √c^2 -a^2
    var cPotencia2 = c * c;
    var aPotencia2 = a * a;

    var valorBaseValid = validacionValorBase(lado, base);
    if (valorBaseValid.base > 0){
        var b = Math.sqrt(cPotencia2 - aPotencia2);     
        return b;
    } else {
        return valorBaseValid;
    }
    
}

function areaTrianguloIso(lado, base) {
    var valorBaseValid = validacionValorBase(lado, base);
    if (valorBaseValid.base > 0){
        var altura = alturaTrianguloIso(lado, base);
        console.log("altura desde areaTriangulo "+altura);
        area = (base * altura) / 2;
        return {
            area: parseFloat(area),
            altura: altura,
            base: base,
            maximoVB: valorBaseValid.maximoValorB
        };
    } else {
        return valorBaseValid;
    }
}

console.groupEnd(); 

// código del círculo
console.group("círculos");
const PI = Math.PI;

//Diamétro
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return PI * diametro;
}

function areaCirculo(radio) {
    return PI * (radio * radio);
} 

console.groupEnd(); 



//Inicia interacción con HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    document.getElementById("resultC").style.display = "block";
    const INPUT = document.getElementById("inputCuadrado");
    const VALUE = INPUT.value;
    const PERIMETRO = perimetroCuadrado(VALUE);
    
    if (VALUE > 0 ) {
        var writeResult = 
        document.getElementById("resultC").innerHTML= 
        `El perimetro del cuadrado es: ${PERIMETRO} unidades`;
        return writeResult;
    } else {
        return document
        .getElementById("resultC").innerHTML= 
        `El perímetro solamente se puede calcular con números positivos`;
    }

}

function calcularAreaCuadrado() {
    document.getElementById("resultC").style.display = "block";
    const INPUT = document.getElementById("inputCuadrado");
    const VALUE = INPUT.value;
    const AREA = areaCuadrado(VALUE);

    if (VALUE > 0) {
        return document.getElementById("resultC").innerHTML= 
        `El área del cuadrado es: ${AREA} unidades cuadradas`;
    } else {
        return document.getElementById("resultC").innerHTML= 
        `El área solamente se puede calcular con números positivos`;
    }


}


//Triangulo Isósceles
function cularPerimetroTrianguloIso() {
    document.getElementById("resultTIso").style.display = "block";
    const INPUT_L = document.getElementById("inputTrianguloIso");
    const VALUE_LADO = parseFloat(INPUT_L.value);
    const INPUT_B =document.getElementById("inputBaseTrianguloIso");
    const VALUE_BASE = parseFloat(INPUT_B.value);
    const PERIMETRO = perimetroTrianguloIso(VALUE_LADO,VALUE_BASE);

    //Se valida que tanto el lado como la base y el perimetro sean numeros positivos
    if ( VALUE_LADO > 0 && VALUE_BASE > 0 && PERIMETRO > 0) {
        var writeResult =
        document.getElementById("resultTIso").innerHTML= 
        `El perímetro del triangulo isósceles: ${PERIMETRO} unidades`;
        return writeResult;
    //Mensaje en caso de que el valor lado y/o el valor base no sean correctos
    }else {
    //Mensaje para notificar que la base no cumple con los requerimientos de la fórmula
        return document.getElementById("resultTIso").innerHTML= 
        `La medida de la base que capturaste no permite hacer los calculos.
        Recuerda que solo puedes hacer calculos con numeros positivos.
        De acuerdo a los valores que ingresaste
        el máximo valor para la base es: ${PERIMETRO.maximoValorB}`
    }
}


function calcularAreaTrianguloIso() {
    document.getElementById("resultTIso").style.display = "block";
    const INPUT_L = document.getElementById("inputTrianguloIso");
    const VALUE_LADO = parseFloat(INPUT_L.value);
    const INPUT_B =document.getElementById("inputBaseTrianguloIso");
    const VALUE_BASE = parseFloat(INPUT_B.value);
    const AREA = areaTrianguloIso(VALUE_LADO,VALUE_BASE);

    //Se valida que tanto el lado como la base y el perimetro sean numeros positivos
    if ( VALUE_LADO > 0 && VALUE_BASE >0 && AREA.base > 0) {
        var writeResult =
        document.getElementById("resultTIso").innerHTML= 
        `El área del triangulo isósceles: ${AREA.area.toFixed(2)} unidades cuadradas. 
        El cálculo para la altura del triángulo es de : ${AREA.altura.toFixed(2)} unidades
        `;
        return writeResult;
        //Mensaje para notificar que la base no cumple con los requerimientos de la fórmula
    }else {
        return document.getElementById("resultTIso").innerHTML= 
        `La medida de la base que capturaste supera lo permitido.
        De acuerdo a los valores que ingresaste
        el máximo valor para la base es: ${AREA.maximoVB}.
        `
    }
}


//Circulo
function calcularCircunferencia(){
    document.getElementById("resultCirculo").style.display = "block";
    const INPUT_CIRCULO = document.getElementById("inputCirculo");
    const VALUE_RADIO = parseFloat(INPUT_CIRCULO.value);
    const CIRCUNFERENCIA = perimetroCirculo(VALUE_RADIO);

    if (VALUE_RADIO > 0) {
        var writeResult = document.getElementById("resultCirculo").innerHTML=
        `La circunferencia del círculo es de ${CIRCUNFERENCIA.toFixed(2)} unidades`;
        return writeResult;
    } else {
        var writeOtherResult = document.getElementById("resultCirculo").innerHTML =
        `Introduce número positivos para realizar los cálculos`;
        return writeOtherResult;
    }
}

function calcularAreaCirculo(){
    document.getElementById("resultCirculo").style.display = "block";
    const INPUT_CIRCULO = document.getElementById("inputCirculo");
    const VALUE_RADIO = parseFloat(INPUT_CIRCULO.value);
    const AREA_CIRCULO = parseFloat(areaCirculo(VALUE_RADIO));

    if(VALUE_RADIO > 0) {
        var writeResult = document.getElementById("resultCirculo").innerHTML=
        `El área del círculo es de ${AREA_CIRCULO.toFixed(2)} unidades cuadradas`;
        return writeResult;
    }else {
        return document.getElementById("resultCirculo").innerHTML =
        `Introduce números positivos para realizar los cálculos`
    }
}



