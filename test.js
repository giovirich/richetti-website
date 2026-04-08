let count = 0;
let counterElement = document.getElementById("counter");
counterElement.innerHTML = count;
let timeUpId;

function countUp(){
    count++;
    counterElement.innerHTML = count;
    console.log(counterElement);
    if(count >= 5){
        clearInterval(timeUpId);
    }
    
}



bgColor = counterElement.style.getPropertyValue("background-color");
console.log("The background color is " + bgColor);
counterElement.addEventListener("mouseover", function(e){
    e.target.style.removeProperty("background-color");
    timeUpId = setInterval(countUp, 200);
});
counterElement.addEventListener("mouseout", function(e){
    e.target.style.setProperty("background-color", "green");
    count = 0;
    counterElement.innerHTML = count;
});

function addPixels(element, cssProperty, pixelAmount) {
    const currentValue = element.style[cssProperty];
    const x = parseInt(currentValue);
    const y = x + pixelAmount;
    return `${y}px`;
}

const helloElem = document.querySelector("#helloMessage"); 
const newVal = addPixels(helloElem, "width", 50);
helloElem.style.setProperty("width", newVal);