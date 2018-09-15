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


window.addEventListener('keypress', (e) => {
    document.getElementById('player1-health').innerText = playerOne.fullHealth
    document.getElementById('player1-damage').innerText = playerOne.lastDamage
    document.getElementById('player2-health').innerText = playerTwo.fullHealth
    document.getElementById('player2-damage').innerText = playerTwo.lastDamage

    let playerOneHit = false
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
}, false)