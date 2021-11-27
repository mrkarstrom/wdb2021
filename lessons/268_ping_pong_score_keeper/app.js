const p1btn = document.querySelector('#p1Button');
const p2btn = document.querySelector('#p2Button');
const resetScore = document.querySelector('#resetScore');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
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
}

p1btn.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
    if(p1Score === winningScore) {
        isGameOver = true;
    }
} );

p2btn.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    if(p2Score === winningScore) {
        isGameOver = true;
    }
} );

