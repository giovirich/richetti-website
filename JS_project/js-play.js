function restartText(textTimer){
    let activeTimer;
    clearTimeout(activeTimer);
    activeTimer = setTimeout(() =>{
        textChange.textContent = "Click bellow";
    }, textTimer*1000);
}

function randomColor(available){
    let colorIndex = Math.floor(Math.random() * available.length);
    let chosenColor = available[colorIndex];

    available.splice(colorIndex, 1);
    return chosenColor;
}

function rotateButtons(){
    const colors = ["LightGreen", "SkyBlue", "Coral", "Gold", "Plum", "Red", "Purple","Cyan", 
        "DarkSalmon", "SlateBlue", "DodgerBlue", "Violet", "Aqua", "Beige", "Crimson", "Chocolate", 
        "HotPink", "Peru", "Sienna", "YellowGreen", "Tomato", "Turquoise", "Thistle", "SteelBlue", 
        "Snow", "SlateGrey", "SpringGreen", "Teal", "Salmon", "RoyalBlue", "Orchid", "OrangeRed"];
    let currentIndex = 0;
    let randomColor0;
    let randomColor1;
    let randomColor2;
    let randomColor3;
    let currentRotation = 0;
    let reverseRotation = 0;
    let textChange = document.getElementById("textChange");

    let bgBtn = document.getElementById("bgBtn");
    bgBtn.addEventListener("click", function(bgColor){
        let currentColor = colors[currentIndex];
        let availableColors = colors.filter(c => c !== currentColor);
        document.body.style.backgroundColor = currentColor;
        
        randomColor0 = randomColor(availableColors);
        randomColor1 = randomColor(availableColors);
        randomColor2 = randomColor(availableColors);
        randomColor3 = randomColor(availableColors);

        textChange.textContent = "WHEEE";
        bgColor.target.style.background = randomColor0;
        regretBtn.style.background = randomColor1;
        crazyBtn.style.background = randomColor2;
        helicopterBtn.style.background = randomColor3;
                                                                                                                                                                                                                                                                                                                                                                                
        currentRotation += 180;
        reverseRotation -= 180;
        bgColor.target.style.transform = `rotate(${currentRotation}deg)`;
        regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
        crazyBtn.style.transform = `rotate(${currentRotation}deg)`;
        helicopterBtn.style.transform = `rotate(${reverseRotation}deg)`;
       
        currentIndex = (currentIndex + 1) % colors.length;
        restartText(5);
    });

    let regretBtn = document.getElementById("regretBtn");
    regretBtn.addEventListener("click", function(rgColor){
        document.body.style.backgroundColor = "white";
        document.body.style.transform = `rotate(0deg)`;
        textChange.textContent = "I'm back to normal";
        currentRotation = 0;
        currentIndex = 0;
        reverseRotation = 0;
        bgBtn.style.transform = `rotate(${currentRotation}deg)`;
        rgColor.target.style.transform = `rotate(${reverseRotation}deg)`;
        crazyBtn.style.transform = `rotate(${currentRotation}deg)`;
        helicopterBtn.style.transform = `rotate(${reverseRotation}deg)`;
        bgBtn.style.background = colors[currentIndex];
        rgColor.target.style.background = colors[currentIndex + 1];
        crazyBtn.style.background = colors[currentIndex + 2];
        helicopterBtn.style.background = colors[currentIndex + 3];
        restartText(5);
    });


    let crazyBtn = document.getElementById("crazyBtn");
    crazyBtn.addEventListener("click", function(crazyColor){
        for(let times = 0; times < 5; times++){
            currentRotation += 178;
            reverseRotation -= 156;
            document.body.style.transform = `rotate(${currentRotation}deg)`;
        }

        document.body.addEventListener("transitionend", function(){
            let currentColor = colors[currentIndex];
            let availableColors = colors.filter(c => c !== currentColor);
            bgBtn.style.background = randomColor(availableColors);
            regretBtn.style.background = randomColor(availableColors);
            crazyColor.target.style.background = randomColor(availableColors);
            helicopterBtn.style.background = randomColor(availableColors);
            bgBtn.style.transform = `rotate(${currentRotation}deg)`;
            regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
            crazyColor.target.style.transform = `rotate(${currentRotation}deg)`;
            helicopterBtn.style.transform = `rotate(${reverseRotation}deg)`;
        }, {once: true});

        textChange.textContent = "";
        restartText(5);
    });

    let helicopterBtn = document.getElementById("helicopterBtn");
    helicopterBtn.addEventListener("click", function(){
        for(let rotation = 0; rotation < 50; rotation++){
            currentRotation += 5000;
            reverseRotation -= 5000;
            bgBtn.style.transform = `rotate(${currentRotation}deg)`;
            regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
            crazyBtn.style.transform = `rotate(${currentRotation}deg)`;
            bgBtn.style.transition = `transform 15s ease-in`;
            regretBtn.style.transition = `transform 15s ease-in`;
            crazyBtn.style.transition = `transform 15s ease-in`;
        };
    });
    document.addEventListener("transitionend", function(){
        currentRotation = 0;
        reverseRotation = 0;
        bgBtn.style.transform = `rotate(${currentRotation}deg)`;
        regretBtn.style.transform = `rotate(${reverseRotation}deg)`;
        crazyBtn.style.transform = `rotate(${currentRotation}deg)`;
        bgBtn.style.transition = `transform 5s ease-out`;
        regretBtn.style.transition = `transform 5s ease-out`;
        crazyBtn.style.transition = `transform 5s ease-out`;
    });
}



function changeColorTextInsideButtons(){
    const colors = ["LightGreen", "SkyBlue", "Coral", "Gold", "Plum", "Red", "Purple","Cyan", 
        "DarkSalmon", "SlateBlue", "DodgerBlue", "Violet", "Aqua", "Beige", "Crimson", "Chocolate", 
        "HotPink", "Peru", "Sienna", "YellowGreen", "Tomato", "Turquoise", "Thistle", "SteelBlue", 
        "Snow", "SlateGrey", "SpringGreen", "Teal", "Salmon", "RoyalBlue", "Orchid", "OrangeRed"];
    const colorTextInsideButtons = document.getElementsByTagName("button");
    let currentIndex = 0;
    let currentColor = colors[currentIndex];
    let availableColors = colors.filter(c => c !== currentColor);

    for(let e = 0; e < colorTextInsideButtons.length; e++){
        let colorChange = colorTextInsideButtons[e];
        colorChange.addEventListener("mouseover", function(t){
            t.target.style.color = `${randomColor(availableColors)}`;
        });
        colorChange.addEventListener("mouseout", function(t){
            t.target.style.color = "black";
        });

    }
}

rotateButtons();
changeColorTextInsideButtons();