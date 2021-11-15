
let timer = [];
document.querySelectorAll("select").forEach(element => {            
    timer.push(parseInt(element.querySelector("option").value));
});

setInterval(function(){

    let getTime = new Date();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    let seconds = getTime.getSeconds();
    let image = document.querySelector("img");


    if(hours>=12 && hours<timer[2]){
        document.getElementsByClassName("message")[0].style.display = "block";
    }else{
        document.getElementsByClassName("message")[0].style.display = "none";
    }

    if(timer[0] == hours){
        image.setAttribute("src","2.jpg");        
    }else if(timer[1] == hours){        
        image.setAttribute("src","1.jpg");        
    }else if(timer[2] == hours){
        image.setAttribute("src","3.jpg");        
    }else{
        image.setAttribute("src","moon.png");   
    }
    
    document.getElementById("hours").innerHTML = hours < 10 ? '0'+ hours : hours;
    document.getElementById("minute").innerHTML = minutes < 10 ? '0'+ minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0'+ seconds : seconds;
    document.getElementById("daytime").innerHTML = getTime.getHours() > 12? "PM":"AM";    
    
},1000);


document.querySelectorAll("select").forEach((element,index) => {
    element.addEventListener("change",()=>{
        timer[index] = parseInt(element.value);
    });

});
