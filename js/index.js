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

  // drag / drop

  const dropPara = document.querySelectorAll('div.text-content, section.content-destination, div.destination')

  Array.from(dropPara).forEach (dropPara => {
    dropPara.setAttribute('class', 'dropzone');
})