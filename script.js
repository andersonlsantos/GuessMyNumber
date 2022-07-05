'use strict';

const sel = (idClass) => {
    let elem = document.querySelector(`${idClass}`)
    return elem
}

const selAll = (idClass) => {
    let elem = document.querySelectorAll(`${idClass}`)
    return elem
}

sel('#b1').addEventListener('click', () => {

    let rand = Math.round(Math.random() * 20)

    let guess = Number(sel('.guess').value)

    if(guess < 1 || guess > 20) {
        sel('.number').textContent = `?`
    }else{
        sel('.number').textContent = `${rand}`
    }

    // console.log(rand, guess)

    if(guess < 1 || guess > 20) {
        sel('.message').textContent = 'invalid number !!'
    }else{
        if(rand === guess) {
            sel('.message').textContent = 'You won ....'
        }else{
            if(guess > rand) sel('.message').textContent = 'Lower ....'
            if(guess < rand) sel('.message').textContent = 'Higher ....'
        }
    }
})

