
/*

Crear una función que dado un año determine si es un año bisiesto o no. 
Ej---> isLeap(2016) Resultado ----> true

*/

function bisiesto(year){
    if(year%4 === 0){
        if(year%100 === 0 && year%400 === 0){
            return `El año ${year} es bisiesto`
        }else if (year%100 === 0 && year%400 !== 0){
            return `El año ${year} no es bisiesto`
        } else {
            return `El año ${year} es bisiesto`
        }
    } else{
            return `El año ${year} no es bisiesto`
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}



const yearTest = 2001
console.log(bisiesto(yearTest))


