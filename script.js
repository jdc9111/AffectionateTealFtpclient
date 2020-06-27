
const butts = document.querySelector('.enter');
// watches enter button at bottom of form

const watchDate = document.querySelector('.billDate');

const watchStartTime = document.querySelector('.startTimeInput');
const watchEndTime = document.querySelector('.endTimeInput');


const watchCode = document.querySelector('.procedureInput');
// watches procude code inut

const watchWeekend = document.querySelector('.weekEndInput');
const watchHoliday = document.querySelector('.holidayInput');
const watchNight = document.querySelector('.nightInput');
const watchEmergency = document.querySelector('.asaEmergencyInput');
const watchCallIn = document.querySelector('.callInInput');
const watchAsaUnits = document.querySelector('.asaUnitsInput');
const watchBmiInput = document.querySelector('.bmiInput');
const watchProneInput = document.querySelector('.proneInput');
const watchSittingInput = document.querySelector('.sittingInput');



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

function asaBonus() {
    let asaBonus = "";
    var asaCode = document.querySelector('.asaUnitsInput').value;

    console.log(asaCode);

    return asaCode;
};






function bmiBonus () {
    let bmiBonus = "";
    var bmiOverForty = document.querySelector('.bmiInput').checked;
    if (bmiOverForty) {
        bmiBonus = ", E010C (BMI >40 +2U) "
    };

    return bmiBonus;

};

function proneBonus () {
    let proneBonus = "";
    var prone = document.querySelector('.proneInput').checked;
    if (prone) {
        proneBonus = ", E011C (Prone position +4U)";
    };

    return proneBonus;

};

function sittingBonus () {
    let sittingBonus = "";
    var sitting = document.querySelector('.sittingInput').checked;
    if (sitting) {
        sittingBonus = ", E024C (Sitting >60° +4U)";
    };

    return sittingBonus;

};



function calculateUnits() {
    var startTime = document.querySelector('.startTimeInput').value;
    console.log(startTime);

    var endTime = document.querySelector('.endTimeInput').value;
    console.log(endTime);

    var start = startTime.split(":")
    var end = endTime.split(":")

    console.log(start);
    console.log(start[1]);

    startMins = parseInt(start[0]*60)+parseInt(start[1]);
    console.log(startMins);

    endMins = parseInt(end[0]*60)+parseInt(end[1]);
    console.log(endMins);

    if (endMins < startMins) {
        endMins = endMins + 1440
    };

    units = Math.ceil((endMins - startMins)/15);
    console.log(units);

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
        bonus = ", E400C (+50% evening)";
        console.log (bonus);
    };

    if (weekend) {
       bonus = ", E400C (+50% weekend)";
    };

    if (holiday) {
        bonus = ", E400C (+50% holiday)";
    };

    if (night) {
        bonus = ", E401C (+75% night)";
    };

    if (emergency) {
        bonus = bonus + ", E020C (Emergency, +4 units)";
    };

    if (calledIn  && startHour >=17) {
        callInBonus = ", C998C (Call in evenings $60.00)";
        console.log('called in evening');
    };

    if (calledIn && weekend) {
        callInBonus = ", C998C (Call in Weekend $60.00)";
    };

    if (calledIn && holiday) {
        callInBonus = ", C998C (Call in Holiday $60.00);"
    };


    if (calledIn && night) {
        callInBonus = ", C999C (Call in nights $100.00)";
    };


    units = calculateUnits();
    console.log(units);

    bmiExtraUnits = bmiBonus();
    console.log(bmiExtraUnits);

    proneExtraUnits = proneBonus();
    console.log(proneExtraUnits);

    sittingExtraUnits = sittingBonus();
    console.log(sittingExtraUnits);

    asaExtraUnits = asaBonus();



    ohipCode = watchCode.value +"C +"+units+" units" +bmiExtraUnits + asaExtraUnits + proneExtraUnits + sittingExtraUnits + bonus + callInBonus;
    
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

    const malampatiClass = document.querySelector('.malampatiInput').value;
    console.log(malampatiClass);

    const asaEmergency = document.querySelector('.asaUnitsInput').value;
    console.log(asaEmergency);

    const consent = document.querySelector('.consent').value;
    

    const notes = document.querySelectorAll('.note');
    console.log(notes);

    const noteArr = [];

    notes.forEach(function(note) {
        noteArr.push(note.value);
    })

    const note = noteArr.join("\n");
    console.log(note)



    navigator.clipboard.writeText(note).then(function() {
        /* clipboard successfully set */
      }, function() {
        /* clipboard write failed */
      });


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
watchEndTime.addEventListener('change',updateCode);

watchCode.addEventListener('change', updateCode);

watchWeekend.addEventListener('change', updateCode);
watchHoliday.addEventListener('change', updateCode);
watchNight.addEventListener('change',updateCode);
watchEmergency.addEventListener('change', updateCode);
watchCallIn.addEventListener('change',updateCode);
watchAsaUnits.addEventListener('change', updateCode);
watchBmiInput.addEventListener('change', updateCode);
watchProneInput.addEventListener('change',updateCode);
watchSittingInput.addEventListener('change',updateCode);



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



