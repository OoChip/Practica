// Write a function called add7 that takes one number and returns that number + 7.

function add7(number) {
    return (number + 7)
}

console.log (add7 (3))

console.log (add7 (20))


// Write a function called multiply that takes 2 numbers and returns their product.

function multiply (num1, num2) {
    return (num1 * num2)
}

console.log ( multiply (2, 4))
console.log ( multiply (2, 6))


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize (str) {
    return str.charAt(0).toUpperCase() + (str.toLowerCase()).slice(1)
}

console.log ( capitalize ("LOSLOCOS"))
console.log ( capitalize ("losdementes"))


/* Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d" */

function lastletter(str) {
  return str.slice(str.length-1)
}

console.log (lastletter("guanabana"))
console.log (lastletter("platano"))
console.log (lastletter("tomate"))

console.log ("Iniciando FizzBuzz")

let input= 100

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz")
    } else if (i % 5 === 0) {  
        console.log ("Buzz")
    } else if (i % 3 === 0){
        console.log ("Fizz")
    } else {
        console.log (i)
    }
}     
    
console.log ("Fatorial")

function factorial (num) {
    let j= 1;
    for ( i = num ; i > 0 ; i-- ) {
        j *= i
    } 
    return j;
    
}

console.log (factorial(11))

console.log ("*************Juego*************")

let Piedra = 1
    , Papel = 2
    , Tijera = 3
    , playerSelection
    , computerSelection
    , computerString
    , playerString
    , result
    , error = false



function computerPlay (){
    computerSelection = Math.floor(Math.random() * (4 - 1)) + 1
    if (computerSelection === 1 )
        computerString = "Piedra"
    else if (computerSelection === 2 )
        computerString = "Papel"
    else if (computerSelection === 3 )
        computerString = "Tijera"
}

function playerPlay (){
    playerSelection = parseInt(prompt("ingrese 1 para Piedra, 2 para Papel y 3 para Tijeras"))
    if (playerSelection === 1 )
        playerString = "Piedra"
    else if (playerSelection === 2 )
        playerString = "Papel"
    else if (playerSelection === 3 )
        playerString = "Tijera"
    else
        error = true
}

function play (p, c){
    if( p === c )
        result = "Empate"
    else if ( (p === Piedra && c === Papel) || (p === Papel && c === Tijera) || (p === Tijera && c === Piedra) )
        result = "Perdiste"
    else
        result = "Ganaste"
}

computerPlay()
console.log(`Computadora eligio ${computerSelection} = ${computerString}`)
playerPlay()
console.log(`Jugador eligo ${playerSelection} = ${playerString}`)
play(playerSelection, computerSelection)
console.log ( `Computadora eligio ${computerString} , jugador eligio ${playerString}`)

if (error)
    console.log( "Debes introducir un numero entre 1 y 3")
else 
    console.log(result )