
/*
Crear una función que genere un numero aleatorio entre 1 y 10, 
esta función recibe un numero como parametro si el numero es igual 
al numero generado aleatoriamente regresara "Buen Trabajo" de lo 
contrario regresara "Intenta de nuevo". 
Ej ---> randomGuess(7) resultado ---> "Buen trabajo" o "Intenta de Nuevo"
*/

randomNumber = 0
function randomGuess (number){
    randomNumber = Math.ceil(Math.random()*10)
    if(randomNumber === number){
        return `Buen trabajo, el numero ingresado es ${number} y el numero aleatorio es ${randomNumber}`
    } else {
        return `Intenta de nuevo, el numero ingresado es ${number} y el numero aleatorio es ${randomNumber}`
    }
}

const numero1 = 3
console.log(randomGuess(numero1))





