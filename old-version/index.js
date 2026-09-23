// TODO: Add the myClickHandler() function here
function myClickHandler(event) {
   event.target.style.color = "black";
}

function myMouseoverHandler(event) {
   event.target.style.backgroundColor = "yellow";
}

function myMouseoutHandler(event) {
   event.target.style.backgroundColor = "white";
}

let elements = document.querySelectorAll(".highlight");
for (let elem of elements) {
   elem.addEventListener("mouseover", myMouseoverHandler);
   elem.addEventListener("mouseout", myMouseoutHandler);
   elem.addEventListener("click", myClickHandler);

}