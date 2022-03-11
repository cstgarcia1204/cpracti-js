//Mediana General de cada país
const salariosMx = mexico.map((person)=>{
    return person.salary;
});

const salariosMexSorted =  salariosMx.sort((salaryA, salaryB)=> {
    return salaryA - salaryB
});
const salariosCol= colombia.map((person)=>{
    return person.salary;
});

const salariosColSorted =  salariosCol.sort((salaryA, salaryB)=> {
    return salaryA - salaryB
});

//Helpers o Utils
function esPar(number) {
    return (number % 2 === 0);
}
function sumaElementos(elementos){
    const sumaDeElementos = 
    elementos.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado +nuevoElemento;
    });

    return sumaDeElementos;
}

function promedio(arrayCantidades) {
    const sumaAcumuladaDeCadaElemento = sumaElementos(arrayCantidades);

    const promedioSalarial = sumaAcumuladaDeCadaElemento / arrayCantidades.length;
    return promedioSalarial;
}

//Calculadora de Mediana
function medianaSalariosPais(listSalary) {
    const mitad = parseInt(listSalary.length / 2);

    if(esPar(listSalary.length)) {
        const persona1Mitad = listSalary[mitad];
        const persona2Mitad = listSalary[mitad-1];

        const promedioP1yP2 = promedio([persona1Mitad, persona2Mitad]);
        return promedioP1yP2;
    }else {
        const personaMitad = listSalary[mitad];
        return personaMitad;
    }
}



// Mediana del top 10%
function extractoSoloTopTenPais(arrayOrdenado) {
    const spliceStart = (arrayOrdenado.length * (100 - 10) / 100);
    const spliceCantidadElementos = arrayOrdenado.length - spliceStart;
    const topTenElementos = arrayOrdenado.splice(
        spliceStart,
        spliceCantidadElementos
    );
    console.log(`Aqui desde extracto top10 : ${topTenElementos}`);
    return topTenElementos;
}

const medianaGeneralMexico = medianaSalariosPais(salariosMexSorted);
const medianaGeneralColombia = medianaSalariosPais(salariosColSorted);

const medianaTopTenMex = medianaSalariosPais(extractoSoloTopTenPais(salariosMexSorted));
const medianaTopTenCol = medianaSalariosPais(extractoSoloTopTenPais(salariosColSorted));

console.log({
    medianaGeneralMexico,
    medianaTopTenMex
});
console.log({
    medianaGeneralColombia,
    medianaTopTenCol
})