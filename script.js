let playerOne = {
    fullHealth: 1000, lastDamage: 0, 
    moves: {
        'a': -5, 'w': -10, 'd': -15, 's': -7 // A, W, D, S
    }
}

let playerTwo = {
    fullHealth: 1000, lastDamage: 0,
    moves: {
        'ArrowLeft': -5, 'ArrowUp': -10, 'ArrowRight': -15, 'ArrowDown': -7 // L, UP, R, DO
    }
}

let lost = false


function resetBattle() {
lost = false
playerOne.fullHealth = 1000
playerOne.lastDamage = 0
playerTwo.fullHealth = 1000
playerTwo.lastDamage = 0

document.getElementById('player1-health').innerText = playerOne.fullHealth
document.getElementById('player1-damage').innerText = playerOne.lastDamage
document.getElementById('player2-health').innerText = playerTwo.fullHealth
document.getElementById('player2-damage').innerText = playerTwo.lastDamage

document.getElementById('reset').innerText = ''
document.getElementById('reset').disabled = true

document.getElementById('status').innerText = 'FIGHT' // refacter defeated player in var



}

window.addEventListener('keypress', (e) => {
    document.getElementById('player1-health').innerText = playerOne.fullHealth
    document.getElementById('player1-damage').innerText = playerOne.lastDamage
    document.getElementById('player2-health').innerText = playerTwo.fullHealth
    document.getElementById('player2-damage').innerText = playerTwo.lastDamage

    let playerOneHit = false
    if (!lost) {
    for (var key in playerOne.moves) {
        if (e.key === key) {
            playerOneHit = true
            playerTwo.fullHealth += playerOne.moves[key] // + negative damage
            playerTwo.lastDamage = playerOne.moves[key]
        } else {
            playerOneHit = false
        }
    }
    if (!playerOneHit) { // player two hit 
        for (var key in playerTwo.moves) {
            if (e.key === key) {
                playerOne.fullHealth += playerTwo.moves[key]
                playerOne.lastDamage = playerTwo.moves[key]
            }
        }
    }
}

    if (playerOne.fullHealth <= 0) {
        playerOne.fullHealth = 0
        lost = true
        document.getElementById('status').innerText = 'GAME OVER PLAYER ONE DEFEATED'
        document.getElementById('reset').innerText = 'REMATCH' // disabled = false
        document.getElementById('reset').disabled = false
    } else if (playerTwo.fullHealth <= 0) {
        playerTwo.fullHealth = 0
        lost = true
        document.getElementById('status').innerText = 'GAME OVER PLAYER TWO DEFEATED' // refacter defeated player in var
        document.getElementById('reset').innerText = 'REMATCH' // disabled = false
        document.getElementById('reset').disabled = false
    }
    // (lost) ? document.getElementById('status').innerText = 'GAME OVER ${DEFEATED PLAYER} LOST' : console.log('')
}, false)