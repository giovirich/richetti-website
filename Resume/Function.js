function showDates(){
    let datebox = document.getElementById("datebox");
    datebox.textContent = "November 2025 - Current";

    let datebox1 = document.getElementById("datebox1");
    datebox1.textContent = "February 2025 - June 2025";

    let datebox2 = document.getElementById("datebox2");
    datebox2.textContent = "August 2024 - February 2025";

    let datebox3 = document.getElementById("datebox3");
    datebox3.textContent = "August 2023 - September 2024";

    let datebox4 = document.getElementById("datebox4");
    datebox4.textContent = "February 2021 - August 2023";

    let datebox5 = document.getElementById("datebox5");
    datebox5.textContent = "September 2018 - February 2021";

    let datebox6 = document.getElementById("datebox6");
    datebox6.textContent = "November 2025 - December 2027";

    let datebox7 = document.getElementById("datebox7");
    datebox7.textContent = "July 2025 - October 2025";

    let datebox8 = document.getElementById("datebox8");
    datebox8.textContent = "October 2018 - March 2021";

    console.log("Dates are now visible");
 }

// Today's date

var fecha = document.getElementById("currentDate");
fecha.textContent = "Current Date: " + new Date().toLocaleDateString();
