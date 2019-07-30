// preloader
// var preload = document.getElementsByClassName('preload')[0];

// preload.classList.add('show-preloader');
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         preload.classList.remove('show-preloader');
//     }, 1500);
// });

//scroll-to-top
var scrollToTopTriggers = document.querySelectorAll('.scroll-to-top__btn');
for (var i = 0; i < scrollToTopTriggers.length; i++) {
    scrollToTopTriggers[i].addEventListener('click', function(event) {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
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

//slider
let sliderImages = document.querySelectorAll('.slider__slide');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let dots = document.querySelectorAll('.button-slider-menu__button-dot');

const resetImages = function(){
    for (let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
};