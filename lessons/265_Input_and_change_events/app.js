const input = document.querySelector('input');
const h2 = document.querySelector('h2')
// input.addEventListener('change', function(e) {
//     console.log('Whatever');
// })

input.addEventListener('input', function(e) {
   h2.innerText = input.value;
})