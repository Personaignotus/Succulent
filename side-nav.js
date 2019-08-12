let sideNavLi = document.querySelectorAll(".side-nav-ul__li");

const resetNavLi = function(){
    for (let i = 0; i < sideNavLi.length; i++){
        sideNavLi[i].classList.remove('active-side-nav');
    }
};

sideNavLi[0].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[0].classList.add('active-side-nav');
});
sideNavLi[1].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[1].classList.add('active-side-nav');
});
sideNavLi[2].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[2].classList.add('active-side-nav');
});
sideNavLi[3].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[3].classList.add('active-side-nav');
});
sideNavLi[4].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[4].classList.add('active-side-nav');
});
sideNavLi[5].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[5].classList.add('active-side-nav');
});
