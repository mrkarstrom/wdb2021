const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetScore = document.querySelector('#resetScore');
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 5;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function(){
    reset();
    winningScore = parseInt(this.value);
});

resetScore.addEventListener('click', reset);

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
            if(player.score === winningScore) {
                player.display.classList.add('has-text-success');
                opponent.display.classList.add('has-text-danger');
                isGameOver = true;
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        player.display.textcontent = player.score;
    }

}

function reset() {
    for(let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
    isGameOver = false;
}

p1.button.addEventListener('click', function() {
   updateScores(p1,p2);
} );

p2.button.addEventListener('click', function() {
   updateScores(p2,p1);
} );

