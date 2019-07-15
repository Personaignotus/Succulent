//preloader
// var preload = document.getElementsByClassName('preload')[0];

// preload.classList.add('show-preloader');
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         preload.classList.remove('show-preloader');
//     }, 1500);
// });






let carousels = document.getElementByClassName('slider-container');
[].forEach(carousels, function(c)){
    let next = c.getElementByClassName
}






// slider-start
// let sliderImages = document.querySelectorAll('.slider__slide');
// let arrowLeft = document.querySelector('#arrow-left');
// let arrowRight = document.querySelector('#arrow-right');
// let currentSlide = 0;
// let sliderDots = document.querySelectorAll('button-slider-menu__button-dot');

// const reset = function(){
//     for (let i = 0; i < sliderImages.length; i++){
//         sliderImages[i].style.display = 'none';
//     }
// }

// const startSlide = function() {
//     reset();
//     sliderImages[0].style.display = 'block';
// }

// const slideLeft = function(){
//     reset();
//     sliderImages[currentSlide-1].style.display = 'block';
//     currentSlide--;
// }

// const slideRight = function(){
//     reset();
//     sliderImages[currentSlide+1].style.display = 'block';
//     currentSlide++;
// }

// arrowLeft.addEventListener('click', function(){
//     if (currentSlide === 0){
//         currentSlide = sliderImages.length;
//     }
//     slideLeft();
// });

// arrowRight.addEventListener('click', function(){
//     if (currentSlide === sliderImages.length-1){
//         currentSlide = -1;
//     }
//     slideRight();
// });


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