let second = 0;
let second1 = 0;

let minute = 0;
let minute1 = 0;

let hour = 0;
let hour1 = 0;

function counter(){
    second = second + 1;
    document.getElementById('second').textContent = second;
    document.getElementById('second1').textContent = second1;

    document.getElementById('minute').textContent = minute;
    document.getElementById('minute1').textContent = minute1;

    document.getElementById('hour').textContent = hour;
    document.getElementById('hour1').textContent = hour1;

    if (second == 9 && second1 != 5){
        second1 = second1 + 1;
        second = -1;
    }


    if (second == 9 && second1 == 5){
        minute = minute + 1;
        second = 0;
        second1 = 0;
    }

    if (minute == 10 && minute1 != 5){
        minute1 = minute1 + 1;
        minute = 0;
    }

    if (minute == 10 && minute1 == 5){
        hour = hour + 1;
        minute = 0;
        minute1 = 0;
    }

    if (hour == 10 && hour1 != 5){
        hour1 = hour1 + 1;
        hour = 0;
    }

    
}

var i = 0;

function Start(){

    if(i == 0){
        intervalo = setInterval(counter, 1000);
        
        i = i + 1;
        console.log(i);
        return i;
    }
    
}

function Stop(){

    
    if(i == 1){
        clearInterval(intervalo);

        i = i - 1
        console.log(i);
        return i;
    }

}

function Reset(){

    document.getElementById('second').textContent = 0;
    document.getElementById('second1').textContent = 0;

    document.getElementById('minute').textContent = 0;
    document.getElementById('minute1').textContent = 0;

    document.getElementById('hour').textContent = 0;
    document.getElementById('hour1').textContent = 0;

    second = 0;
    second1 = 0;

    minute = 0;
    minute1 = 0;

    hour = 0;
    hour1 = 0;
}




/* 
code in progress
*/