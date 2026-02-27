const colors = ["lightgreen", "skyblue", "coral", "gold", "plum", "red", "purple","cyan"];
let currentIndex = 0;
let randomColor1;
let randomColor2;
let randomColor3;
let currentRotation;
let reverseRotation;
let textChange = document.getElementById("textChange");
let buttonContainer = document.getElementsByClassName("buttonContainer");

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
});


// const hello = (name, coolness) => 
//     {console.log(`Hello ${name}`)
//     console.log(`Your level of swag is: ${coolness}`)};

// hello("BRO","Superb");

// let madLib = function(adverb, noun1, noun2, adjective, verb){
//     return `The ${adjective} ${noun1} ${adverb} ${verb} ${noun2}`;
// }

// console.log(madLib("quietly", "dog", "moon", "lazy", "smashed"));

// function showColors(){
//     for(let diffColors of colors){
//     // let diffColors = colors[i];
//     console.log(diffColors);
//     }
// }

// showColors();

let dukeScores  = [72, 74, 84, 92, 93, 66, 69, 73, 70, 85, 75, 67, 79];
let ncScores    = [76, 73, 77, 90, 81, 74, 53, 68, 88, 84, 58, 81, 73];
let winningTeam = [];

for(let i = 0; i < dukeScores.length; i++){
    if(dukeScores[i] > ncScores[i]){
        winningTeam.push("D");
    }else{
        winningTeam.push("N");
    }
};

