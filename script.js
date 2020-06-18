
const butts = document.querySelector('.enter');

const watchDate = document.querySelector('.billDate');

const wacthStartTime = document.querySelector('.startTimeInput').value;

function setCurrentTime () {
    // set the default end time to current time and start time to 31 mins ago;
    var today = new Date ();
    var endHour = today.getHours();
    var endMins = today.getMinutes();
    console.log(endHour);

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
    }

    startingTime = startHour + ":" + startMins;
    console.log(startingTime);

    document.querySelector('.startTimeInput').value = startingTime;
    document.querySelector('.endTimeInput').value = endingTime;

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
    console.log(wacthStartTime);
}

  
  window.onload = function() {
    getDate();
    isNight();
    setCurrentTime();
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






