let hobbies: string = "Hello";

let users : boolean | number;
users = 1;



let mamamia: (number | string) [];
let mamamia2: Array<string | number>;

let xplicitValues: [boolean, string, number];

xplicitValues = [true, 'yes', 25];
//xplicitValues = [true, 'yes', 'hello'];

let mom: number | string = 1;
mom = "sugar";

type Role = 'admin' | 'editor' | 'guest';

const userRole: Role = 'admin';

function access(role: Role){
}

function strSum(a: string, b: string){
    return a + " " + b;
}

console.log(strSum('Hello', 'user'));