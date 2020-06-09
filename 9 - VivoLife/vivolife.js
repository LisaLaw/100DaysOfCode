window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("navbar").style.top = "0px";
    }
    else {
        document.getElementById("navbar").style.padding = "35px 10px";
        document.getElementById("navbar").style.top = "40px";
    }
}
/*
function toggleBtn1() {
    let menu2 = document.getElementById('menu_01');
    if (menu2.style.display === 'none') {
        menu2.style.display = 'flex';
    }
    else {
        menu2.style.display = 'none';
    }
}
*/
function toggleBtn1() {
    let first_dropdown = document.getElementById('menu_01');
    if (first_dropdown.className === '') {
        first_dropdown.className.add = 'visible';
    }
    else {
        first_dropdown.className += '';
    }
}

function toggleBtn2() {
    let menu2 = document.getElementById('menu_02');
    if (menu2.style.display === 'none') {
        menu2.style.display = 'flex';
    }
    else {
        menu2.style.display = 'none';
    }
}

let slideIndex = 1;
showSlides(slideIndex);

//Next and prev controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }
    slides[slideIndex-1].style.display = "block";
    
}