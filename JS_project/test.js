const colors = ["lightgreen", "skyblue", "coral", "gold", "plum"];
let currentIndex = 0;
let currentRotation= 0;
let textchg = document.getElementById("textchg");

let bgBtn = document.getElementById("bgBtn");
bgBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    textchg.innerHTML = "<h1>WHEEEE</h1>";
    bgBtn.style.background = colors[currentIndex];
    regretBtn.style.background = colors[currentIndex + 1];
    forBtn.style.background = colors[currentIndex + 2];

    currentRotation += 120;
    document.body.style.transform = `rotate(${currentRotation}deg)`;
});

let regretBtn = document.getElementById("regretBtn");
regretBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
    document.body.style.transform = "rotate(0deg)";
    textchg.innerHTML = "<h1>I'm back to normal</h1>";
    currentRotation = 0;
    currentIndex = 0;
    bgBtn.style.background = colors[currentIndex];
    regretBtn.style.background = colors[currentIndex + 1];
    forBtn.style.background = colors[currentIndex + 2];
});


let forBtn = document.getElementById("forBtn");
forBtn.addEventListener("click", function(){
    for(let times = 0; times < 5; times++){
        currentRotation += 200;
        document.body.style.transform = `rotate(${currentRotation}deg)`;
    }
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

