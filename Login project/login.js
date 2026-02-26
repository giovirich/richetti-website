let userName;
let userPassword;

let insectP = 2;
let numW = 1;
console.log("Weeks " + numW + ": Insect population " + insectP);

while(insectP < 10000){
   insectP *= 2;
   numW ++;
   console.log("Weeks " + numW + ": Insect population " + insectP);
}