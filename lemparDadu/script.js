const dice = document.querySelector(".dice");
const rollButton = document.querySelector(".roll-button");
const diceImg = document.querySelector(".dice-img")
const diceLog = document.querySelector(".dice-log")

function rollDice() {
    const random = Math.floor(Math.random() * 6 + 1);
    diceImg.setAttribute("src", `./img/dice-${random}.png`)

    const log = document.createElement("img")
    log.setAttribute("src", `./img/dice-${random}.png`)
    log.classList.add("dice-log-item")
    diceLog.appendChild(log)
    

    console.log(random)
  return random
}

rollButton.addEventListener("click", () => {
 rollDice();
});
