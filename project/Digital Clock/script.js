setInterval(function(){

    let getTime = new Date();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    let seconds = getTime.getSeconds();

    document.getElementById("hours").innerHTML = hours < 10 ? '0'+ hours : hours;
    document.getElementById("minute").innerHTML = minutes < 10 ? '0'+ minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0'+ seconds : seconds;
    document.getElementById("daytime").innerHTML = getTime.getHours() > 12? "PM":"AM";    
    
},1000);
