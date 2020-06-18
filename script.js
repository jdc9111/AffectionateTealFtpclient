
const butts = document.querySelector('.enter');

const watchDate = document.querySelector('.billDate');

const watchStartTime = document.querySelector('.startTimeInput');

function setCurrentTime () {
    // set the default end time to current time and start time to 31 mins ago;
    var today = new Date ();
    var endHour = today.getHours();
    var endMins = today.getMinutes();
    console.log(endHour);

    if (endHour < 10) {
        endHour = "0"+endHour;
    }

    if (endMins < 10) {
        endMins = "0"+endMins;
    }

    
    endingTime = endHour + ':' + endMins;
    console.log(endingTime);


    startMins = endMins - 31;
    startHour = endHour;



    if (startMins < 0) {
        startMins = startMins + 60
        console.log(startMins);
        startHour = startHour-1
    }

    if (startMins < 10) {
        startMins = "0"+startMins
        console.log(startMins);
    }

    console.log(startHour);

    if (startHour <10) {
       startHour = "0"+startHour;
       console.log(startHour);
    };


    
    startingTime = startHour + ":" + startMins;
    console.log(startingTime);

    document.querySelector('.startTimeInput').value = startingTime;
    document.querySelector('.endTimeInput').value = endingTime;
    console.log(endingTime);

};

function getDate() {
    var today = new Date();
    var day = today.getDay(); // day of th week
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    document.getElementById("date").value = today;

    // day of the week
    console.log(day);

    var isWeekend = (day === 6) || (day === 0);
    document.getElementById("weekend").checked = isWeekend;

  };

function isNight () {
    var nightProcedure = document.querySelector('.startTimeInput').value
    console.log(nightProcedure);
    console.log('it works');

    var startHour = nightProcedure.substring(0,2);
    console.log(startHour);

    if (startHour < 7) {
        console.log('its a night');
        document.getElementById("night").checked = true;
    } else {
    //} else if (startHour >= 7) {
        console.log('its day time');
        document.getElementById("night").checked = false;
    }

};


  
  window.onload = function() {
    getDate();
    setCurrentTime();
    isNight();
  };




function handleClick() {
    console.log('IT GOT CLICKED');
    
    
    const previousHistory = document.querySelector('.history').value;
    console.log(previousHistory);

    const examFree = document.querySelector('.exam').value;
    console.log(examFree);

    const malampatiClass = document.querySelector('.malampati').value;
    console.log(malampatiClass);

    const asaScore = document.querySelector('.asaScoreInput').value;
    console.log(asaScore);

    const asaEmergency = document.querySelector('.asaEmergencyInput').value;
    console.log(asaEmergency);

    const asaTotal = asaScore + asaEmergency
    console.log(asaTotal);

    const procedure = document.querySelector('.procedureInput').value;
    console.log(procedure);

    const startTime = document.querySelector('.startTimeInput').value;
    console.log(startTime);

    const endTime = document.querySelector('.endTimeInput').value;
    console.log(endTime);

    var today = new Date();
    console.log(today);
    


};

function handleDate() {
    currentDate = document.querySelector('.billDate').value;
    console.log(currentDate);

    let workingDate = new Date(currentDate);
    console.log(workingDate);

    var day = workingDate.getDay(); // day of th week
    console.log(day);

    // this is screwed up b/c not using actual date but UTC so off by one day
    var isWeekend = (day === 6) || (day === 5);
    console.log (isWeekend);
    document.getElementById("weekend").checked = isWeekend;


};



butts.addEventListener('click', handleClick);

watchDate.addEventListener('change', handleDate);
watchStartTime.addEventListener('change',isNight);


//E400C Evening Premium
//1700-2400hrs Mon to Fri, daytime or evenings on Sat Sun and Holidays. 
//Adds 50% to each fee code.
//E401C Night Premium 
//0000-0700hrs 
//Adds 75% to each fee code. 

//https://www.dr-bill.ca/blog/anaesthesia-ohip-billing-codes-cheat-sheet#assessments



