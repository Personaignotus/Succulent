//preloader
// var preload = document.getElementsByClassName('preload')[0];

// preload.classList.add('show-preloader');
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         preload.classList.remove('show-preloader');
//     }, 1500);
// });


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

const resetDots = function(){
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active-dot');
        }
    };

// start-slider
const startSlide = function() {
    resetImages();
    sliderImages[0].style.display = 'block';
    resetDots();
    dots[0].classList.add('active-dot');
};

startSlide();

//arrows-slider
arrowLeft.addEventListener('click', function(){
    if(sliderImages[0].style.display === 'block'){
        resetDots();
        dots[3].classList.add('active-dot');
        resetImages();
        sliderImages[3].style.display = 'block';
    } else if(sliderImages[1].style.display === 'block'){
        resetDots();
        dots[0].classList.add('active-dot');
        resetImages();
        sliderImages[0].style.display = 'block';
    } else if(sliderImages[2].style.display === 'block'){
        resetDots();
        dots[1].classList.add('active-dot');
        resetImages();
        sliderImages[1].style.display = 'block';
    } else if(sliderImages[3].style.display === 'block'){
        resetDots();
        dots[2].classList.add('active-dot');
        resetImages();
        sliderImages[2].style.display = 'block';
    }
});

arrowRight.addEventListener('click', function(){
    if(sliderImages[0].style.display === 'block'){
        resetDots();
        dots[1].classList.add('active-dot');
        resetImages();
        sliderImages[1].style.display = 'block';
    } else if(sliderImages[1].style.display === 'block'){
        resetDots();
        dots[2].classList.add('active-dot');
        resetImages();
        sliderImages[2].style.display = 'block';
    } else if(sliderImages[2].style.display === 'block'){
        resetDots();
        dots[3].classList.add('active-dot');
        resetImages();
        sliderImages[3].style.display = 'block';
    } else if(sliderImages[3].style.display === 'block'){
        resetDots();
        dots[0].classList.add('active-dot');
        resetImages();
        sliderImages[0].style.display = 'block';
    }
});


//dots-slider
dots[0].addEventListener('click', function(){
    resetDots();
    dots[0].classList.add('active-dot');
    resetImages();
    sliderImages[0].style.display = 'block';
});

dots[1].addEventListener('click', function(){
    resetDots();
    dots[1].classList.add('active-dot');
    resetImages();
    sliderImages[1].style.display = 'block';
});

dots[2].addEventListener('click', function(){
    resetDots();
    dots[2].classList.add('active-dot');
    resetImages();
    sliderImages[2].style.display = 'block';
});

dots[3].addEventListener('click', function(){
    resetDots();
    dots[3].classList.add('active-dot');
    resetImages();
    sliderImages[3].style.display = 'block';
});


//automat-slider
var slideIndex = 0;

function showSlides() {
    for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none"; 
    dots[i].classList.remove('active-dot');
    }
    slideIndex++;
    if (slideIndex > sliderImages.length) {slideIndex = 1} 
    sliderImages[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].classList.add('active-dot');
    setTimeout(showSlides, 5000);
};

showSlides();


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