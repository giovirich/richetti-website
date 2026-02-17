function showDates(){
    let datebox = document.getElementById("datebox");
    let btn = document.getElementById("showBtn0");

    if(datebox.textContent === ""){
        datebox.textContent = "September 2018 - February 2021";
        document.getElementById("datebox1").textContent = "August 2023 - February 2026";
        document.getElementById("datebox2").textContent = "February 2021 - August 2023"
        document.getElementById("datebox3").textContent = "November 2025 - December 2027"
        document.getElementById("datebox4").textContent = "October 2018 - March 2021"
        document.getElementById("datebox5").textContent = "February 2026"
        document.getElementById("datebox6").textContent = "In progress"
        document.getElementById("datebox7").textContent = "July 2025 - October 2025"

        btn.textContent = "Clear dates";
        console.log("Dates are now visible");

    }else{
        let allDateboxes = document.querySelectorAll('[id^="datebox"]');
        allDateboxes.forEach(box => box.textContent = "");

        btn.textContent = "Populate dates";
        console.log("Dates are now cleared");
    }
    
 }

// Today's date

var fecha = document.getElementById("currentDate");
fecha.textContent = "Current Date: " + new Date().toLocaleDateString();
