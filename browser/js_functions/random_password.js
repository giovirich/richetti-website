function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars = "0123456789";
   const symbolChars = "!@#$%^&*()_+-=";

   let allowedChars = "";
   let password = "";

   allowedChars += includeLowerCase ? lowercaseChars : "";
   allowedChars += includeUpperCase ? uppercaseChars : "";
   allowedChars += includeNumbers ? numberChars : "";
   allowedChars += includeSymbols ? symbolChars : "";

   if(allowedChars.length <= 0){
      return `Password must be at least 1`;

   }

   for(let x = 0; x < length; x++ ){
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];

   }

   return password;
}

const passwordLenght = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, 
                                includeLowerCase, includeUpperCase, 
                                includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);