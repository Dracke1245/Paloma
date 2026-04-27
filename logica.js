let input = document.getElementById("n1")
let input2 = document. getElementById("n2")
let cambio = document.getElementById("cantidad")

let boton = document.getElementById("boton")

boton.addEventListener("click", suma)


function suma () {

    let numero
    let numero2
    let suma

    numero = Number(input.value)
    numero2 = Number(input2.value)


    suma = numero + numero2


    cambio.textContent = suma


    
}