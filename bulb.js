const bulb = document.querySelector('#bulb');
const switchs = document.querySelector('#switch');
const container = document.querySelector('.container');
const cont = document.querySelector('.cont');

switchs.addEventListener("click", function(){
    if(bulb.src.match('bulboff')){
          bulb.src = "bulbon.gif";
        switchs.innerHTML = "Turn Off";
        container.classList.remove("container");
        container.classList.add("cont");
        switchs.style.color = "red";
        
    }    else{
        bulb.src = "bulboff.gif";
        switchs.innerHTML = "Turn On";
        container.classList.add("container");
        switchs.style.color = "";
    }
  
})