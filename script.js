let rollDiceBtn = document.getElementById("rollDice");
let diceChange = document.getElementById("diceChange");
let card = document.querySelector(".card");

let icons = [
    '<i class="fa-solid fa-dice-one"></i>',
    '<i class="fa-solid fa-dice-two"></i>',
    '<i class="fa-solid fa-dice-three"></i>',
    '<i class="fa-solid fa-dice-four"></i>',
    '<i class="fa-solid fa-dice-five"></i>',
    '<i class="fa-solid fa-dice-six"></i>'
];


rollDiceBtn.onclick = function() {
    diceChange.classList.remove("animation-roll");
    diceChange.offsetWidth;
    diceChange.classList.add("animation-roll");

    let randomIndex = Math.floor(Math.random() * 6); // 0 to 5
    let diceNumber = randomIndex + 1;
    diceChange.innerHTML = icons[randomIndex];
    diceChange.classList.add("animation-roll");

    let rollCard = document.createElement("div");
    rollCard.classList.add("card-1");
    rollCard.innerHTML = `
    <p class="text">Roll: <span>${diceNumber}</span></p>
    <div class="icon">${icons[randomIndex]}</div>
     `;
    card.appendChild(rollCard);
}
