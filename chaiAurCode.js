
// variables initialization 

let randomNo = Math.floor(Math.random()*100 + 1)
let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remainingGuess = document.querySelector('.lastResult')
let lowOrHigh = document.querySelector('.lowOrHi')
let restartGame = document.querySelector('.resultParas')

const paragraph = document.createElement('p')

let prevGuesses = []
let numGuess = 1
let playGame = true


// logic starts

if(playGame){
    submit.addEventListener('click', (event)=>{

        // since its a form element - prevent default behaviour
        event.preventDefault()
        let guess = parseInt(userInput.value)
        console.log('guess value is', guess);
        

        validateGuess(guess)

    })

}

let validateGuess = (guess)=>{

    if( isNaN(guess) ) {
        alert('Input only an Integer!')
    }

    else if( guess<1 || guess>100){
        alert('Input an Integer from 1 to 99..')

    }

    else{
        prevGuesses.push(guess)

        if (numGuess ==10 ){
            cleanUpGuess(guess)
            displayMessage(`Your turns are over!! The no. to be guessed was ${randomNo}`)
            endGame()
        }

        else{
            cleanUpGuess(guess)
            checkGuess(guess)

        }


    }
    
}


let checkGuess = (guess)=>{

    if(guess == randomNo){
        displayMessage(`Congrats! You're right!`)
        endGame()
    }

    else if (guess < randomNo) {
        displayMessage(`Lower than the no.`)

    }
    
    else if (guess > randomNo) {
        displayMessage(`Higher than the no.`)

    }
    
}


let cleanUpGuess = (guess)=>{
    // This cleans up the previous guess value
    userInput.value=''

    // Adds the current guess value to the existing previosu guesses' list
    guessSlot.innerHTML = guessSlot.innerHTML + `   ${guess}   `

    numGuess++

    remainingGuess.innerHTML= 10-numGuess
    
}


let displayMessage = (message)=>{
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
    
}


let endGame = ()=>{
    
    userInput.value = ''

    // so that futrher valus addn to INPUt NOt allowed
    userInput.setAttribute( 'disabled', '')

    // another mehtod of adding button elemnet to existying 'p' element
    paragraph.classList.add('button')

    paragraph.innerHTML=`<h3 id='newGame'> Start new game</h3>`

    // adding paragraph element to existing 'resultparas' calss
    restartGame.appendChild(paragraph)

    playGame = false

    newGame()

}


let newGame = ()=>{

    let newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener( 'click', (event)=>{

        randomNo = Math.floor(Math.random()*100 + 1)
        prevGuesses=[]
        numGuess=0
        guessSlot.innerHTML=``
        remainingGuess.innerHTML= 10-numGuess
        userInput.removeAttribute('disabled')
        restartGame.removeChild(paragraph)

        playGame=true

    })

}




