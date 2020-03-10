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