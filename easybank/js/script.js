console.log("heelo")

const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector('.header')
const body = document.querySelector('body')
// const overlay = document.querySelector('.overlay')
const fadeOut = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscroll')
        fadeOut.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    } else {
        header.classList.add('open');
        body.classList.add('noscroll')
        fadeOut.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
            
        });
      }
})