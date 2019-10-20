let button= document.getElementsByClassName("expand--button")[0];
let slider=document.getElementsByClassName("slider")[0];
let isEnabled=true;
function left(){
  isEnabled=false;
  let sliderPos=(parseFloat(window.getComputedStyle(slider,null).getPropertyValue('left'))/parseFloat(window.getComputedStyle(slider,null).getPropertyValue('width'))*4).toFixed();
  sliderPos--;
  slider.style.left=sliderPos*100+"%";
  slider.classList.add("slider_animated");
  window.setTimeout(function(){
    if (sliderPos==-3) {
      sliderPos=-1;
      slider.style.left=sliderPos*100+"%";
      slider.classList.remove("slider_animated");
    }
    isEnabled=true;
  ;},1000);
}

function right(){
  isEnabled=false;
  let sliderPos=(parseFloat(window.getComputedStyle(slider,null).getPropertyValue('left'))/parseFloat(window.getComputedStyle(slider,null).getPropertyValue('width'))*4).toFixed();
  sliderPos++;
  slider.style.left=sliderPos*100+"%";
  slider.classList.add("slider_animated");
  window.setTimeout(function(){
    if (sliderPos==0) {
      sliderPos=-2;
      slider.style.left=sliderPos*100+"%";
      slider.classList.remove("slider_animated");
    }
    isEnabled=true;
  },1000);
}

let sliderRight=document.getElementsByClassName("slider_right")[0];
sliderRight.addEventListener("click", function(){
  if (isEnabled) left();

});

let sliderLeft=document.getElementsByClassName("slider_left")[0];
sliderLeft.addEventListener("click", function(){
  if (isEnabled) right();

});

slider.addEventListener("animationend", function(){
  isEnabled=true;
  if (sliderPos==0) {
    sliderPos=-2;
    slider.style.left=sliderPos*100+"%";
    slider.classList.remove("slider_animated");
  }
  if (sliderPos==-3) {
    sliderPos=-1;
    slider.style.left=sliderPos*100+"%";
    slider.classList.remove("slider_animated");
  }

})
let startX=0;
let startY=0;
let minX=200;
let maxY=100;
let startTime=0;
let minTime=100;
slider.addEventListener("touchstart", function(e){
  startX=e.changedTouches[0].pageX;
  startY=e.changedTouches[0].pageY;
  startTime= new Date().getTime();
  e.preventDefault();
} );
slider.addEventListener("touchend", function(e){
  if (new Date().getTime()-startTime>minTime&& Math.abs(e.changedTouches[0].pageY-startY)<maxY){
    let dist=e.changedTouches[0].pageX-startX;
    if (Math.abs(dist)>minX){
      if (isEnabled){
        if (dist > 0){
          right();
        } else {
          left();
        }

      }
    }
  }

  e.preventDefault();
});

button.addEventListener("click", function(){
  this.classList.toggle("active");
  let expansion= document.getElementsByClassName("education_content")[0];
  if (expansion.style.display=="block"){
    expansion.style.display="none";
 } else {
    expansion.style.display="block"
  }
});

let projectDescriptionButton= document.querySelectorAll(".description_expand_button");
for (let i=0;i<projectDescriptionButton.length;i++){
  projectDescriptionButton[i].addEventListener("touchend", function(){
    this.classList.toggle("active");
    let expandPanel=this.nextElementSibling;
    expandPanel.classList.toggle("expanded");
  });

}


