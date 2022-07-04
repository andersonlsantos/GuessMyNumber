'use strict';

const sel = (idClass) => {
    let elem = document.querySelector(`${idClass}`)
    return elem
}

const selAll = (idClass) => {
    let elem = document.querySelectorAll(`${idClass}`)
    return elem
}

let rand = () => {
    let lista = []

    for(let som = 1; som <= 20; som++){
        lista.push(som)
    }
    
    let randi = Math.round(Number(Math.random() * 19))

    return lista[randi]
}

let guess = sel('.guess')

function controlRand(){
    let num = Number(guess.value)

    // console.log(rand(), num)

    if(rand() === num) {
        console.log(`Acertou, ${num} == ${rand()}`)
    }else{
        console.log(`Errou, ${num} != ${rand()}`)
    }
}

let b1 = sel('#b1').onclick = controlRand

