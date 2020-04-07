// Your code goes here

const get = (selector) => {
    document.querySelector(selector)
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


