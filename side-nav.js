let sideNavLi = document.querySelectorAll(".side-nav-ul__li");
let sideNavLiA = document.querySelectorAll(".side-nav-ul__li__a");

const resetNavLi = function(){
    for (let i = 0; i < sideNavLi.length; i++){
        sideNavLi[i].classList.remove('active-side-nav');
    }
};

sideNavLiA[0].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[0].classList.add('active-side-nav');
});
sideNavLiA[1].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[1].classList.add('active-side-nav');
});
sideNavLiA[2].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[2].classList.add('active-side-nav');
});
sideNavLiA[3].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[3].classList.add('active-side-nav');
});
sideNavLiA[4].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[4].classList.add('active-side-nav');
});
sideNavLiA[5].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[5].classList.add('active-side-nav');
});

//

let headerSideNavLi = document.querySelectorAll(".how-to-care__side-nav-li");

headerSideNavLi[0].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[0].classList.add('active-side-nav');
});
headerSideNavLi[1].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[1].classList.add('active-side-nav');
});
headerSideNavLi[2].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[2].classList.add('active-side-nav');
});
headerSideNavLi[3].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[3].classList.add('active-side-nav');
});
headerSideNavLi[4].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[4].classList.add('active-side-nav');
});
headerSideNavLi[5].addEventListener('click', function(){
    resetNavLi();
    sideNavLi[5].classList.add('active-side-nav');
});