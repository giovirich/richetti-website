"use strict";
function validateEmail() {
    let email = document.getElementById("myEmail").value;
    let confirmEmail = document.getElementById("confirmEmail").value;
    if (email !== confirmEmail) {
        alert("Error: your email addresses do not match. Please try again.");
        return false;
    }
    alert("Success! your message has been submitted");
    return true;
}
