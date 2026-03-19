// let actors = new Map(); // Code will be tested with different actors

// actors.set("Elijah Wood", { movie: "The Lord of the Rings", role: "Frodo Baggins" });
// actors.set("Orlando Bloom", { movie: "Pirates of the Caribbean", role: "Will Turner" });
// actors.set("Matthew McConaughey", { movie: "Interstellar", role: "Cooper" });
// actors.set("Michael Connor Humphreys", { movie: "Forrest Gump", role: "Young Forrest Gump" });

// function actorInfo(actorName, actors) {
//     if(actors.has(actorName)){
//         return `${actorName} plays ${actors.get(actorName).role} in ${actors.get(actorName).movie}`;
//     }else{
//         return "Actor not found";
//     };

// };

// let response = actorInfo("Benjamin", actors);
// console.log(response);


/* Ex: Given the following actors map, output should be:
Number of actors: 2
Actor: Sean Astin, Role: Samwise Gamgee
Actor: Johnny Depp, Role: Jack Sparrow */

// let actors = new Map(); // Code will be tested with different actors

// actors.set("Sean Astin", { movie: "The Lord of the Rings", role: "Samwise Gamgee" });
// actors.set("Johnny Depp", { movie: "Pirates of the Caribbean", role: "Jack Sparrow" });

// function tryung(){
//     console.log("Numbers of actors: "+ actors.size);
//     for(let [person, r] of actors){
//         console.log(`Actor: ${person}, Role: ${r.role}`);
//     };
// };

// tryung();


let sopa = "Hello my friend, Leo lives here";
let totalSpaces = 0;

for(let s = 0; s <sopa.length; s++ ){
    if(sopa.charAt(s) === "H"){
        totalSpaces++;
    };
};

console.log(`${totalSpaces} spaces`);
console.log(sopa);
console.log(sopa.replace("my friend", "Fucka you too"));