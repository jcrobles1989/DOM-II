// mouseover

const highlightPara = document.getElementsByTagName('p');

Array.from(highlightPara).forEach (highlightPara => {

highlightPara.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange"

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
})

// wheel

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

// drag

const draggPara = document.querySelectorAll('p')

Array.from(draggPara).forEach (draggPara => {
    draggPara.setAttribute('draggable', 'true');
})

// keydown 

const keyLog = document.createElement('p')

keyLog.setAttribute('id', 'log')

const parentElement = document.querySelector('header.main-navigation');

parentElement.append(keyLog)

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

keyLog.style.width = '20%';

// mouseenter

const logoChanger = document.querySelector('h1.logo-heading')

logoChanger.addEventListener('mouseenter', event => {
    logoChanger.style.border = '3px dotted orange';
    logoChanger.style.transform = 'scale(2)';
    logoChanger.style.color = 'orange';
})

// mouseleave

logoChanger.addEventListener('mouseleave', event => {
    logoChanger.style.border = '';
    logoChanger.style.transform = '';
    logoChanger.style.color = '';
})

// form 

const formContainer = document.querySelector('.intro')
const form = document.createElement('form')
form.style.display = 'flex'
form.style.justifyContent = 'center'

const firstInput = document.createElement('input')
firstInput.setAttribute('placeholder', 'name')
firstInput.style.textAlign = 'center'
form.append(firstInput)
formContainer.prepend(form)

// load

const body = document.querySelector('body')

body.addEventListener('load', alert('Hello There'))

// resize 

window.addEventListener('resize', () => {
    alert(`${window.innerWidth}, ${window.innerHeight}
Resize Works!`)
})

// dblclick

const imgRotate = document.querySelector('.img-content');

imgRotate.addEventListener('dblclick', () => {
    imgRotate.style.transform = 'rotate(20deg)'
})