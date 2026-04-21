function validateEmail(){
    let email: string = (document.getElementById("myEmail") as HTMLInputElement).value;
    let confirmEmail: string = (document.getElementById("confirmEmail") as HTMLInputElement).value;

    if(email !== confirmEmail){
        alert("Error: your email addresses do not match. Please try again.");
        return false;
    }

    alert("Success! your message has been submitted");
    return true;
}