'use strict';

const sel = (idClass) => {
    let elem = document.querySelector(`${idClass}`)
    return elem
}

const selAll = (idClass) => {
    let elem = document.querySelectorAll(`${idClass}`)
    return elem
}

const rand = () => parseInt(Math.random() * 21)

let guess = sel('.guess')

let b1 = sel('#b1').onclick = () => {
    if(guess.value == rand()) {
        console.log(`Acertou, ${guess.value} == ${rand()}`)
    }else{
        console.log(`Errou, ${guess.value} != ${rand()}`)
    }
}
