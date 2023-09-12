function numberControl(i){
    // check number if num < 10
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

function getTime(){
    //current date
    let date = new Date();

    //dom elements
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");

    //hour, minutes, seconds
    let x = date.getHours();
    let y = date.getMinutes();
    let z = date.getSeconds();

    hours.innerHTML = numberControl(x);
    minutes.innerHTML = numberControl(y);
    seconds.innerHTML = numberControl(z);

    setTimeout(getTime, 1000);
}
getTime();