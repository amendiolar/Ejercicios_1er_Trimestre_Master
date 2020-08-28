
/*
Hay dos matrices con valores individuales, escriba un 
programa JavaScript para calcular la suma de cada valor 
de índice individual de las matrices dadas 
Ej. sumIndex([1,0,2,3,4],[3,5,6,7,8,13]) 
salida --> [4, 5, 8, 10, 12, 13]
*/

longitudes = []
matrizSuma = []
function sumIndex(matriz1, matriz2){
    longitud1 = matriz1.length
    longitudes.push(longitud1)
    longitud2 = matriz2.length
    longitudes.push(longitud2)
    longitudes.sort(function(a, b){return a-b})
    for(var i=0; i<longitudes[0]; i++){
        matrizSuma.push(matriz1[i]+matriz2[i])
    }
    if(longitud1 > longitud2){
        adicionales1 = longitud1 - longitud2
        for(var i=0; i<adicionales1; i++){
            matrizSuma.push(matriz1[longitud2+i])
        } 
    } else if(longitud2>longitud1){
        adicionales2 = longitud2 - longitud1
        for(var i=0; i<adicionales2; i++){
            matrizSuma.push(matriz2[longitud1+i])
        } 
    }
    return matrizSuma
}


const matrix1 = [1,0,2,3,4]
const matrix2 = [3,5,6,7,8,13]
console.log(sumIndex(matrix1, matrix2))

/*
const misNumeros = [1,10,2,5,7,3]
misNumeros.sort(function(a, b){return a-b})
console.log(misNumeros)
*/


