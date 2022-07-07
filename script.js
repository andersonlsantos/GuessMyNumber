'use strict';

const sel = (idClass) => {
    let elem = document.querySelector(`${idClass}`)
    return elem
}

const selAll = (idClass) => {
    let elem = document.querySelectorAll(`${idClass}`)
    return elem
}

let score = 20

const controlClick = () => {

    score--

    let cont = 1

    let rand = Math.round(Math.random() * 20)

    let guess = Number(sel('.guess').value)

    if(score >= 0) sel('.score').textContent = score.toString()
    if(score < 0) {
        sel('#b1').disabled = true
        sel('.message').textContent = 'Game Over ...'
        sel('body').style.backgroundColor = 'red'
    }

    if(guess < 1 || guess > 20 && score !== 0) {
        if(score > 0) sel('.message').textContent = 'invalid number !!'
    } else {
        if(rand === guess) {
            sel('.message').textContent = 'You won ....'
            sel('body').style.backgroundColor = 'green'
            sel('.number').textContent = `${rand}`
            sel('.highscore').textContent = 20 - score
            cont = 0
        }else{
            if(score > 0){
                if(guess > rand) sel('.message').textContent = 'Lower ....'
                if(guess < rand) sel('.message').textContent = 'Higher ....'
                sel('body').style.backgroundColor = '#222'
            }
        }
    }

    if(cont) {
        sel('#b1').disabled = false
    } else {
        sel('#b1').disabled = true
    }

}

sel('#b1').addEventListener('click', controlClick)

sel('.again').addEventListener('click', () => location.reload())
