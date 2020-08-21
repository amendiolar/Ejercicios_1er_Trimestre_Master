
/*
Escribe una función que reciba un string como parametro y regrese 
el string con "Py" al principio, si el string ya tiene "Py" regresar 
el string original Ej ---> addPy("hola") resultado ---> "Pyhola"
*/


function addPy(texto){
    const starts = /^Py/
    const evaluacion = starts.test(texto1)
    if( evaluacion === true){
        return texto
    } else {
        return `Py${texto}`
    }
}

const texto1 = 'Hola'
console.log(addPy(texto1))




