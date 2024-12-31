const area=document.getElementById("area")
const box=document.getElementById("box")
let color = 0

function move(){
        let h = Math.floor(Math.random() * 36);
        let w = Math.floor(Math.random() * 86);
        area.style.marginTop = `${h}%`;
        area.style.marginLeft = `${w}%`;
}

move();


function rainbow(){
    if (color<360){
        color += 1;
    } 
    
    if (color===360){
        color = 0
    }

    box.style.backgroundColor = `hsl(${color},100%,40%)`;
}

setInterval(rainbow, 50);