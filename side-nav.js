let sideNavLi = document.querySelectorAll(".side-nav-container__li");
let sideNavLiLine = document.querySelectorAll(".side-nav-container__li:hover:before");

const startSideNavLi = function() {
    sideNavLi[0]classList.add('active-side-nav');
    sideNavLiLine[0]classList.add('active-side-nav');
};

// sideNavLi.addEventListener('click', function(){

// }