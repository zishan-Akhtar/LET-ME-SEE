let timer = 120;
let score = 0;
let randomNumber;
// make & print multiple bubbles and in that bubble print random numbers.
function makeBubble() {
    let clutter ='' ;
for (let i = 0; i <= 175; i++) {
    let randomNumber = Math.floor(Math.random()*10) 
    clutter += `<div class="LTS">${randomNumber}</div> `;
}
document.querySelector(".gameContant").innerHTML = clutter;
}
// run & print timer for 1 minute backword.
 function runTimer() {
    let timerint = setInterval(() => {   
    if (timer > 0) {
        timer--;
        document.querySelector("#timer").textContent = timer;
    } else {
        clearInterval(timer);
        document.querySelector(".gameContant").innerHTML = `<h1> GAME OVER / TO PLAY AGAIN REFRESH THE PAGE</h1> 
        <h1>/ YOUR SCORE ${score}</h1>`
    }
}, 1000);
}
// evrytime hit target or refresh print new random number into hit .
function getNewHit() {
    randomNumber = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = randomNumber
}
// when hit the target correct increse score by 10.
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent =score;
}
document.querySelector(".gameContant").addEventListener("click",
function (dets) {
    let clickedNumber = (Number(dets.target.textContent));
    if (clickedNumber === randomNumber ) {
        increaseScore();
        makeBubble();
        getNewHit(); 
    } 
})
// 
getNewHit();
runTimer();
makeBubble();
