//preloader
// var preload = document.getElementsByClassName('preload')[0];

// preload.classList.add('show-preloader');
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         preload.classList.remove('show-preloader');
//     }, 1500);
// });



// slider-start
let sliderImages = document.querySelectorAll('.slider__slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let currentSlide = 0;

const reset = function(){
    for (let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

const startSlide = function() {
    reset();
    sliderImages[0].style.display = 'block';
}

const slideLeft = function(){
    reset();
    sliderImages[currentSlide-1].style.display = 'block';
    currentSlide--;
}

const slideRight = function(){
    reset();
    sliderImages[currentSlide+1].style.display = 'block';
    currentSlide++;
}

arrowLeft.addEventListener('click', function(){
    if (currentSlide === 0){
        currentSlide = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if (currentSlide === sliderImages.length-1){
        currentSlide = -1;
    }
    slideRight();
});


let dots = document.querySelectorAll('.button-slider-menu__button-dot');
let slideIndex = 0;

const showSlides = function(){

    for(let i=0 ; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }

    slideIndex++;

    if(slideIndex > sliderImages.lenght){
        slideIndex = 1;
    }

    for(let i=0; i < dots.lenght; i++){
        dots[i].className = dots[i].className.replace(' button-dot-active', '');
    }

    sliderImages[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' button-dot-active';
    setTimeout( showSlides , 1000);
};

showSlides();




//scroll-to-top
var scrollToTopTriggers = document.querySelectorAll('.btn-scroll-to-top');
for (var i = 0; i < scrollToTopTriggers.length; i++) {
    scrollToTopTriggers[i].addEventListener('click', function(event) {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        easyScroll({
            'scrollableDomEle': window,
            'direction': 'top',
            'duration': 1000,
            'easingPreset': 'easeInQuad',
            'scrollAmount': top
        });
    });
}

//footer-date
var currentSlideYearSelector = document.querySelector(".footerYear");
var currentSlideYear = new Date().getFullYear();
currentSlideYearSelector.textContent = currentSlideYear;