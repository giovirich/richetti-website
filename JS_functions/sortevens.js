function sortEvens(numArray) {
    let x = [];
     for(let i = 0; i < numArray.length; i++){
        let pair = numArray[i];
        if(pair % 2 === 0){
            x.push(pair);
            
        }
     }
     let final = x.sort(function(a, b){
        return a -b;
     });

     return final;
}

console.log("Testing sortEvens()...");
let nums = [224, 4, 2, 9, 1, 8, 600];
let nums1 = [9, 1];
let evenNums = sortEvens(nums);
console.log(evenNums);
