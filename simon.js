gameSeq = [];
userSeq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started !");
        started = true;

        lvlup();
    } 
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function lvlup() {
    userSeq =[]; 
    level++;
    h3.innerText = `level ${level}`;

    let rndmIdx = Math.floor(Math.random() * 3);
    let rndmClr = btns[rndmIdx];
    let rndmBtn = document.querySelector(`.${rndmClr}`); 
    gameSeq.push(rndmClr);  
    console.log(gameSeq);
     
    gameFlash(rndmBtn); 
}

function checkAns(idx) {
    
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlup, 1000);
        }
    } else{
        h3.innerHTML = `game over! Press any key to restart. Score: ${level*2}`
        reset();
    }
}

function btnPress() { 
   let btn = this;  
   userFlash(btn);

   userclr = btn.getAttribute("id");
   userSeq.push(userclr);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}