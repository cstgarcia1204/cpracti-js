const list1 = [100,200,500,300];
const list2 = [100,200,300,500,800];
const list3 = [1,2,3,1,2,3,4,2,2,2,1];
const list4 = [6,3,1,5,2,0,7,3,2,1,8,1,7,7,2,0,9,7,]

//Calcular Suma elementos
function sumaElementos(elementos){
    const sumaDeElementos = 
    elementos.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado +nuevoElemento
    });

    return sumaDeElementos;
}
// Calcular elementos
function mediaAritmetica(elementos) {
    let numeroDelementos = elementos.length;
    const suma = sumaElementos(elementos);
    const promedio = suma / numeroDelementos;
    return promedio;
}

function espar(numero) {
    if (numero % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
function mediana(elementos){
    const mitadDeLaLista = elementos.length / 2;
    const banderaPar = espar(mitadDeLaLista);
    let median;

    if(banderaPar){
        const elemento1 = elementos[parseInt(mitadDeLaLista)];
        const elemento2 = elementos[parseInt(mitadDeLaLista-1)];
        median = [elemento1,elemento2];
        console.log("si es par y esta es la mediana array "+median);
        return mediaAritmetica(median);
    }else{
        median = elementos[parseInt(mitadDeLaLista)];
        console.log("No es par "+ " :"+parseInt(mitadDeLaLista));
        return console.log(median);
    }
}

function contadorDeCoincidencias(arrayElmentos){
    let listaContadora = {};
    // con este metodo map contamos las coincidencias de cada elemento del array
    // el resultado que arroja el proceso map se guarda en un objeto que es listaContadora
    arrayElmentos.map((element)=>{
        if(listaContadora[element]){
            listaContadora[element] += 1; 
        }else{
            listaContadora[element] = 1;
        }
    });
    return listaContadora;
}

function moda(elementos) {
    let listaContadora = contadorDeCoincidencias(elementos);
    let objetoAArray = Object.entries(listaContadora);
    let arrayListaCountOrdenado = objetoAArray.sort(function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    });
    const modaResult = arrayListaCountOrdenado[arrayListaCountOrdenado.length-1];
    return console.log(`La moda es el elmento ${modaResult[0]} y el número de repeticiones fue de ${modaResult[1]}`);
}
/* Lo que sucede dentro de arrayListaCountOrdenado es lo siguiente:
    una resta para ordenar nuestro array de arryas a partir del valor que 
    tiene el objeto y ese valor en el objeto representa el numero de 
    coincidencias de cada elemento:
    Ejemplo: originalmente tenemos un objeto de esta estructura {
            1: 3,
            2: 5,
            3: 2;
            4: 1
    }
    al convertir el objeto en array con "Objetc.entries" la estructura
    queda así [["1",3],["2",5],["3",2],["4",1]] 
    En el momento de puntualizar el elementocon indice 1, es decir, 
    la psicion 2 de nuestro array
    quiere decir que nuestro array de arrays se re-oredenara a partir de las
    coincidencias y resulta de la siguiente manera:
    [["4",1],["3",2],["1",3],["2",5]]
    en este caso como el numero con mayor coincidencias es el ultimo elemento del array
    ese valor es nuestra moda.
    */
