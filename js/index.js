// Your code goes here

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

const highlightNav = document.querySelectorAll('a.nav-link');

Array.from(highlightNav).forEach (highlightNav => {

    highlightNav.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'orange'
    });

})

const tween = TweenLite.to(highlightPara, 1, {
    width: '40%'
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

const getAll = (selector) => {
   return document.querySelectorAll(selector)
}

const paraSelector = getAll('p')

paraSelector.forEach( paraSelector => {
    
    paraSelector.addEventListener('mouseenter', function(event) {
        event.target.style.color = 'turquoise'
    })

    paraSelector.addEventListener('mouseleave', function(event) {
        event.target.style.color = ''
    })
})

// dblclick

const imgRotate = document.querySelector('.img-content');

imgRotate.addEventListener('dblclick', () => {
    imgRotate.style.transform = 'rotate(20deg)'
})

