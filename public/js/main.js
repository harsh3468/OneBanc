const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
var textArray = ['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENTS', 'FOREX', 'ANALYTICS'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


var iconChanger1 = document.querySelectorAll('.design-icon1 div')
var index1 = 0 

function effect1(){
    if(index1<=8){    
    if(index1){
        iconChanger1[index1-1].classList.remove('icon-effects')
    }
      iconChanger1[index1].classList.add('icon-effects')
      index1++
      setTimeout(effect1,2000)
    }else{
        iconChanger1[index1-1].classList.remove('icon-effects');
        index1=0
        setTimeout(effect1,2000)
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    setTimeout(effect1,2000);
  });

var iconChanger = document.querySelectorAll('.design-icon2 div')
var index = 0 

function effect(){
    if(index<=8){    
    if(index){
        iconChanger[index-1].classList.remove('icon-effects')
    }

    iconChanger[index].classList.add('icon-effects')
    index++
     setTimeout(effect,2000)
    }else{
        iconChanger[index-1].classList.remove('icon-effects');
        index=0
        setTimeout(effect,2000)
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    setTimeout(effect,2000);
  });


var iconChanger3 = document.querySelectorAll('.design-icon3 div')
var index3 = 0 

function effect3(){
    if(index3<=8){    
    if(index3){
        iconChanger3[index3-1].classList.remove('icon-effects')
    }

    iconChanger3[index3].classList.add('icon-effects')
    index3++
     setTimeout(effect3,2000)
    }else{
        iconChanger3[index3-1].classList.remove('icon-effects');
        index3=0
        setTimeout(effect3,2000)
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    setTimeout(effect3,2000);
  });