let stateCapitals = {
    MA: "Boston",
    RI: "Providence",
    CT: "Hartford"   
};

// console.log("All states capitals:")
// for(let state in stateCapitals){
//     console.log(`${state} is ${stateCapitals[state]}`)
// }

let courses = {
    170:{
        title: "Introduction to Programming",
        description: "Develop algorithms for computers",
        creditsHours: "5"
    },
    250:{
        title: "Web Development",
        description: "Build web applications",
        creditsHours: "3"
    },
    310:{
        title: "Operating Systems",
        description: "Process management and memory management",
        creditsHours: "3"
    },
    430:{
        title: "Artificial Intelligence",
        description: "Simulate human thinking",
        creditsHours: "2"
    }
};

// for (let course in courses){
//     console.log(courses[course].title);
//     if(courses[course].creditsHours == 3){
//         console.log(`${course} ${courses[course].title}`)
//     }
// }

let people = new Map([
    [592, {name: "Julia", favAssg: "Math"}],
    [543, {name: "Freddy", favAssg: "English"}],
    [589, {name: "Benjamin", favAssg: "math"}],
    [509, {name: "Jose", favAssg: "Science"}]
]);

// for(let p in people){
//     if(people[p].favAssg == "Math" || people[p].favAssg == "math"){
//         console.log(`These are the students that love Math: ${people[p].name}`);
//     };
// };

// for(let [id, value] of people){
//     let nombres = value.favAssg.toUpperCase();
//     console.log(`${nombres}`);
// };


// let kkk = Object.keys(courses);
// console.log(kkk);
// console.log(kkk.length);

// if ("160" in courses){
//     console.log("170 exist");
// }
// else{
//     console.log("Chinga tu madre");
// };


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

let actors = new Map(); // Code will be tested with different actors

actors.set("Sean Astin", { movie: "The Lord of the Rings", role: "Samwise Gamgee" });
actors.set("Johnny Depp", { movie: "Pirates of the Caribbean", role: "Jack Sparrow" });

function tryung(){
    console.log("Numbers of actors: "+ actors.size);
    for(let [person, r] of actors){
        console.log(`Actor: ${person}, Role: ${r.role}`);
    };
};

tryung();