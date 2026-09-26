//Sort even numbers
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
function execSirtEvens(){
   console.log("Testing sortEvens()...");
   let nums = [224, 4, 2, 9, 1, 8, 600];
   let nums1 = [9, 1];
   let evenNums = sortEvens(nums);
   console.log(evenNums);
}

//Identify INT from STR
function printSum(x, y) {
    let z;
    if(!isNaN(x) && !isNaN(y)){
        x = parseFloat(x);
        y = parseFloat(y);
        z = x + y;
        console.log(`Sum is ${z}.`);
    }
    else if(isNaN(x) && isNaN(y)){
        console.log(`'${x}' and '${y}' are not numbers.`);
    }
    else if(isNaN(x)){
        console.log(`'${x}' is not a number.`);
    }
    else if(isNaN(y)){
       console.log(`'${y}' is not a number.`);
    }
    
}

function execPrintSum(){
    console.log("Testing printSum()...");

    printSum(3, 6);            // 9
    printSum(3.5, 6.1);        // 9.6
    printSum("hello", 6);      // 'hello' is not a number
    printSum(10, "hi");        // 'hi' is not a number
    printSum("hello", "hi");   // 'hello' and 'hi' are not numbers
}