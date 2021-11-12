

let navbar = document.querySelector('.header-nav');

window.onscroll = function (e){
    scrollFunction()
}

function scrollFunction(){
    if(window.pageYOffset > 200){
        makeNavBlack()
    } else deleteNavBlack()
}
function makeNavBlack(){
    navbar.classList.add('header-nav-black')
}
function deleteNavBlack(){
    navbar.classList.remove('header-nav-black')
}
