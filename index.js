let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player_form = document.getElementById("player_form")
let nameEl = document.getElementById("name-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startEl = document.getElementById("start-el")
let newEl = document.getElementById("new-el")

let playerObj = {
    name: "",
    chips: 0
}

let playerEl = document.getElementById("player-el")

function startGame() {
    if (nameEl.textLength === 0 || nameEl.textLength < 3) {
        alert("Player Name is required, minimum length is 3 character")
    } else {

        playerEl.style.display = ""
        cardsEl.style.display = ""
        sumEl.style.display = ""
        player_form.style.display = "none"
        startEl.style.display = "none"
        newEl.style.display = ""

        playerEl.textContent = nameEl.value

        let firstCard = getRandomCard()
        let secondCard = getRandomCard()

        isAlive = true
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        startEl.style.display = ""
        newEl.style.display = "none"
    } else {
        message = "You're out of the game!"
        isAlive = false
        startEl.style.display = ""
        newEl.style.display = "none"
    }

    messageEl.textContent = message
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card);
        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber == 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}