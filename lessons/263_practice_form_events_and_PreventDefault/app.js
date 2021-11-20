const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted!");
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText=catName;
    list.append(newLI);
    input.value = "";
})