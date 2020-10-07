


let scrollSnapWrapper = document.getElementById('scroll-snap-wrapper');


scrollSnapWrapper.addEventListener('scroll', whichOneToAnimate);


function inView(element) {
  const elementHeight = element.clientHeight;

  const windowHeight = window.innerHeight;

  const scrollY = window.scrollY || window.pageYOffset;
  
  
  const scrollPosition = scrollY + windowHeight;

  const elementPosition = element.getBoundingClientRect().top;


  if (elementPosition < 200) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function whichOneToAnimate() {
  let sections = document.querySelectorAll('.sections');

  for(let i = 0; i < sections.length; i++){
    if(inView(sections[i])){
      animateSections(sections[i]);
    };
  }
}

function animateSections(section){
  
  let navigation = document.querySelectorAll('nav > a');

  navigation.forEach(element => {
    element.classList.remove('navActive');
  })

  if(section.id == 'hero'){
    navigation[0].classList.add('navActive');
  }

  if(section.id == 'about-me'){

    let aboutMeContainer = document.querySelectorAll('#aboutme-container > *');
    aboutMeContainer[0].classList.add('slideInFromLeft');
    aboutMeContainer[1].classList.add('slideInFromRight');

    navigation[1].classList.add('navActive');

  }

  let counter = 0;

  if(section.id == 'gallery'){

    navigation[2].classList.add('navActive');

    if(counter == 0){
      slides[0].classList.add('slideIn');
      counter++;
    }
  }

  if(section.id == 'services'){

    let servicesContainer = document.querySelectorAll('#services-container > div');
    servicesContainer[0].classList.add('slideInFromLeft');
    servicesContainer[1].classList.add('slideInFromTop');
    servicesContainer[2].classList.add('slideInFromRight');
    servicesContainer[3].classList.add('slideInFromBottom');

    navigation[3].classList.add('navActive');

  }

  if(section.id == 'contact-me'){

    let contactMeContainer = document.querySelectorAll('#contact-me-container > div');
    contactMeContainer[0].classList.add('slideInFromLeft');
    contactMeContainer[1].classList.add('slideInFromRight');

    navigation[4].classList.add('navActive');
    
  }
}

// Hero image animation

(function heroAnimation(){

let firstNav = document.querySelector('nav a:nth-child(1)');
firstNav.classList.add('navActive');

let heroH1 = document.getElementById('heroH1');

const tooltipText = heroH1.innerText;
const splitText = tooltipText.split('');
heroH1.innerText = '';
    for(let i = 0; i < splitText.length; i++){
        heroH1.innerHTML += '<span class="written">' + splitText[i] + '</span';
    }

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = heroH1.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete(timer);
        return;
    }
}

let navA = document.querySelectorAll('nav a');
let navPosition = document.querySelector('nav').getBoundingClientRect();

if(navPosition.y > 0){
  navA.forEach(element =>{
    element.style.transform = "translateY(100%)";
  })
  setInterval(function(){
    navA.forEach(element =>{
      element.style.animation = "stickyFromBottom 0.7s ease-in-out forwards";
    })
  }, 3200);

}else{
  navA.forEach(element =>{
    element.style.transform = "translateX(-100%)";
  })
  setInterval(function(){
    navA.forEach(element =>{
      element.style.animation = "stickyFromLeft 0.7s ease-in-out forwards";
    })
  }, 3200);
}

})()

function complete(interval){
    clearInterval(interval);
}


//slider

let left = document.getElementById('left');
let right = document.getElementById('right');
let slides = document.querySelectorAll('.slides');
let counter = 0;

left.addEventListener('click', slide);
right.addEventListener('click', slide);


function slide(){

  if(this == left){
    if(counter == 0){
      slides[counter].classList.remove('slideIn');
      slides[counter].classList.add('slideOut');
      counter = slides.length - 1;
      slides[counter].classList.add('slideIn');
    }else{
      slides[counter].classList.remove('slideIn');
      slides[counter].classList.add('slideOut');
      counter--;
      slides[counter].classList.add('slideIn');
    }
  }else{

    if(counter == slides.length - 1){
      slides[counter].classList.remove('slideIn');
      slides[counter].classList.add('slideOut');
      counter = 0;
      slides[counter].classList.add('slideIn');
    }else{
      slides[counter].classList.remove('slideIn');
      slides[counter].classList.add('slideOut');
      counter++;
      slides[counter].classList.add('slideIn');
    }

    left.removeEventListener('click', slide);
    right.removeEventListener('click', slide);

    setTimeout(function(){

      left.addEventListener('click', slide);
      right.addEventListener('click', slide);
    },1500)
  }
}