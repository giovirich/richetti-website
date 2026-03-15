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

for (let course in courses){
    if(courses[course].creditsHours == 3){
        console.log(`${course} ${courses[course].title}`)
    }
}


// let kkk = Object.keys(courses);
// console.log(kkk);
// console.log(kkk.length);

// if ("160" in courses){
//     console.log("170 exist");
// }
// else{
//     console.log("Chinga tu madre");
// };
