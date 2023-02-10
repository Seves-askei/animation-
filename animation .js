/*let i = 1;
function essaie(){
    console.log(i);
    i++;
      requestAnimationFrame(essaie);
}
essaie();*/

            let blague = document.getElementById("blague");
blague.style.color = 'red';
blague.style.position = "absolute";
let position = 0;
let contraire = 0;

function bouge(){
    if (position== 300) {contraire = -1;}
    else if(position== 0) {contraire = 1;}
    position += 3*contraire;
//    position++;
    blague.style.top = `${position}px`;
    console.log(position);
       
          requestAnimationFrame(bouge); 
    
          
}
bouge();

      