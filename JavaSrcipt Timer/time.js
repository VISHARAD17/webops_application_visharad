// variables to store the values
let seconds = 0;
let minutes = 0;
let m_sec = 0;

// vars to store edited values to display
let displaySeconds = 0;
let displayMinutes = 0;
let display_m_sec = 0;

// interval & status for start & stop
let interval = null;
let status = true;

// function to determine values
function StopWatch(){
    m_sec++;
    if(m_sec / 1000 === 1){
        m_sec = 0;
        seconds++;
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
        }
    }

    // string manipulation to display time interval nicely
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(m_sec < 10){
        display_m_sec = "000" + m_sec.toString();
    }
    else if (m_sec < 100){
        display_m_sec = "00" + m_sec.toString();
    }
    else if (m_sec < 1000){
        display_m_sec = "0" + m_sec.toString();
    }
    else{
        display_m_sec = m_sec;
    }

    //Display updated time values
    document.getElementById("display_time").innerHTML = displayMinutes + ":" + displaySeconds + ":" + display_m_sec;

}

// called function after clicking start/stop button
function startStop(){

    if(status === true){
        interval = window.setInterval(StopWatch, 1);
        document.getElementById("btn_2").innerHTML = "Stop";
        status = false;
    }
    else{
        window.clearInterval(interval);
        document.getElementById("btn_2").innerHTML = "Start";
        status = true;
    }
}

//Function to reset the stopwatch
function resetfunction(){
    window.clearInterval(interval);
    // resetting all the variables to zero
    seconds = 0;
    minutes = 0;
    hours = 0;
    //initial settings
    document.getElementById("display_time").innerHTML = "00:00:0000";
    document.getElementById("btn_2").innerHTML = "Start";

}
