let sideNavLi = document.querySelectorAll(".side-nav-ul__a__li");

const resetNavLi = function(){
    for (let i = 0; i < sideNavLi.length; i++){
        sideNavLi[i].style.opacity = 0.001;
    }
};

const startNavLi = function() {
    resetNavLi();
    sideNavLi[0].style.opacity = 1;
};

startNavLi();

sideNavLi[0].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[0].style.opacity = 1;
});

sideNavLi[1].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[1].style.opacity = 1;
});

sideNavLi[2].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[2].style.opacity = 1;
});

sideNavLi[3].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[3].style.opacity = 1;
});

sideNavLi[4].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[4].style.opacity = 1;
});

sideNavLi[5].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[5].style.opacity = 1;
});