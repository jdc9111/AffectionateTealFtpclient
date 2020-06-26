
const butts = document.querySelector('.enter');
// watches enter button at bottom of form

const watchDate = document.querySelector('.billDate');

const watchStartTime = document.querySelector('.startTimeInput');

const watchCode = document.querySelector('.procedureInput');
// watches procude code inut

const watchWeekend = document.querySelector('.weekEndInput');
const watchHoliday = document.querySelector('.holidayInput');
const watchNight = document.querySelector('.nightInput');
const watchEmergency = document.querySelector('.asaEmergencyInput');
const watchCallIn = document.querySelector('.callInInput');



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

    updateCode();

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

    updateCode();

};


function calculateUnits() {
    units = 5
    return units;
};


function updateCode () {
    console.log('updateCode');

    
    startTime = document.querySelector('.startTimeInput').value;
    console.log (startTime);
    startHour = startTime.substring(0,2);
    console.log(startHour); 
    weekend = document.getElementById("weekend").checked;
    holiday = document.querySelector('.holidayInput').checked;
    night = document.querySelector('.nightInput').checked;
    emergency = document.querySelector('.asaEmergencyInput').checked;
    calledIn = document.querySelector('.callInInput').checked;
    


    let bonus = "";
    let callInBonus ="";

    if (startHour >= 17) {
        console.log ('after 5pm');
        bonus = "E400C 50% Evening";
        console.log (bonus);
    };

    if (weekend) {
       bonus = "E400C 50% evening or weekend";
    };

    if (holiday) {
        bonus = "E400C 50% holiday";
    };

    if (night) {
        bonus = "E401C 75% night";
    };

    if (emergency) {
        bonus = bonus + ", E020C (Emergency)";
    };

    if (calledIn  && startHour >=17) {
        callInBonus = ", C998C - Call in evenings $60.00";
    };

    if (calledIn && night) {
        callInBonus = ", C999C - Call in nights $100.00";
    }

    units = calculateUnits();
    console.log(units);

    console.log(watchCode.value);
    ohipCode = watchCode.value +"C +"+units+" units, " + bonus + callInBonus;
    console.log(ohipCode);

    document.getElementById("billingCodes").value = ohipCode;

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

watchCode.addEventListener('change', updateCode);

watchWeekend.addEventListener('change', updateCode);
watchHoliday.addEventListener('change', updateCode);
watchNight.addEventListener('change',updateCode);
watchEmergency.addEventListener('change', updateCode);
watchCallIn.addEventListener('change',updateCode);






//E400C Evening Premium
//1700-2400hrs Mon to Fri, daytime or evenings on Sat Sun and Holidays. 
//Adds 50% to each fee code.
//E401C Night Premium 
//0000-0700hrs 
//Adds 75% to each fee code. 

//https://www.dr-bill.ca/blog/anaesthesia-ohip-billing-codes-cheat-sheet#assessments

//C998C - Call in evenings $60.00
//C999C - Call in nights $100.00

// TODO:
// 



