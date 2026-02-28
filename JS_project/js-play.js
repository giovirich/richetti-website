const colors = ["lightgreen", "skyblue", "coral", "gold", "plum", "red", "purple","cyan"];
let currentIndex = 0;
let randomColor1;
let randomColor2;
let randomColor3;
let currentRotation = 0;
let reverseRotation = 0;
let textChange = document.getElementById("textChange");
let buttonContainer = document.getElementsByClassName("buttonContainer");
let activeTimer;

function restartText(textTimer){
    clearTimeout(activeTimer);
    activeTimer = setTimeout(() =>{
        textChange.textContent = "Click bellow";
    }, textTimer*1000);
}

let bgBtn = document.getElementById("bgBtn");
bgBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[currentIndex];
    randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    bgBtn.style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    textChange.textContent = "WHEEE";
    regretBtn.style.background = randomColor1;
    forBtn.style.background = randomColor2;

    currentRotation += 180;
    reverseRotation -= 180;
    bgBtn.style.transform = `rotate(${currentRotation}deg)`;
    regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
    forBtn.style.transform = `rotate(${currentRotation}deg)`;
    restartText(5);
});

let regretBtn = document.getElementById("regretBtn");
regretBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
    document.body.style.transform = `rotate(0deg)`;
    textChange.textContent = "I'm back to normal";
    currentRotation = 0;
    currentIndex = 0;
    reverseRotation = 0;
    bgBtn.style.transform = `rotate(${currentRotation}deg)`;
    regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
    forBtn.style.transform = `rotate(${currentRotation}deg)`;
    bgBtn.style.background = colors[currentIndex];
    regretBtn.style.background = colors[currentIndex + 1];
    forBtn.style.background = colors[currentIndex + 2];
    restartText(5);
});


let forBtn = document.getElementById("forBtn");
forBtn.addEventListener("click", function(){
    for(let times = 0; times < 5; times++){
        randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        randomColor3 = colors[Math.floor(Math.random() * colors.length)];
        currentRotation += 178;
        reverseRotation -= 156;
        document.body.style.transform = `rotate(${currentRotation}deg)`;
        document.body.addEventListener("transitionend", function(){
            bgBtn.style.transform = `rotate(${currentRotation}deg)`;
            regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
            forBtn.style.transform = `rotate(${currentRotation}deg)`;
        }, {once: true});
    }
    bgBtn.style.background = randomColor3;
    regretBtn.style.background = randomColor1;
    forBtn.style.background = randomColor2;
    textChange.textContent = "";
    restartText(5);
});

