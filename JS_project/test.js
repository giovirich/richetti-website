const colors = ["lightgreen", "skyblue", "coral", "gold", "plum"];
let currentIndex = 0;
let currentRotation= 0;
let textchg = document.getElementById("textchg");

let bgBtn = document.getElementById("bgBtn");
bgBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    textchg.innerHTML = "<h1>WHEEEE</h1>";

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
});