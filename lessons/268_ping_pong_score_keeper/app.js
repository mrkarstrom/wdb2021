const p1btn = document.querySelector('#p1Button');
const p2btn = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;


p1btn.addEventListener('click', function() {
    p1Score += 1;
    p1Display.textContent = p1Score;
} );

p2btn.addEventListener('click', function() {
    p2Score += 1;
    p2Display.textContent = p2Score;
} );

