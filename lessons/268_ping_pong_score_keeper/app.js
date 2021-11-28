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


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function(){
    reset();
    winningScore = parseInt(this.value);
});

resetScore.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    isGameOver = false;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;
}

p1btn.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
    if(p1Score === winningScore) {
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        isGameOver = true;
        p1btn.disabled = true;
        p2btn.disabled = true;
    }
} );

p2btn.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    if(p2Score === winningScore) {
        p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        isGameOver = true;
        p1btn.disabled = true;
        p2btn.disabled = true;
    }
} );

