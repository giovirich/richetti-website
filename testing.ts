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

// function logError(errorMessage: string){
//     console.log(errorMessage);
//     throw new Error(errorMessage);
// }

// function performJob(cb: (m: string) => void){
//     //...
//     cb('Well done');
// }

// performJob(logError);

type User = {
    name: string;
    age: number | string;
    greet: () => string;
}

let user: User = {
    name: 'jose',
    age: 25,
    greet() {
        console.log("Hello there!");
        return this.name;
    },
}

user.greet();


