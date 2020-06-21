//make design responsive to width
let toggleBtn = document.getElementsByClassName('toggle-button')[0];
let navLinksLeft = document.getElementsByClassName('nav-links')[0];
let navLinksRight = document.getElementsByClassName('nav-links')[2];

toggleBtn.addEventListener('click', () => { //on click of toggle button, add active function to nav-links
    navLinksLeft.classList.toggle('active');
    navLinksRight.classList.toggle('active');
})

//create dropdown menu
let firstDropdownBtn = document.getElementsByClassName('dropdown')[0];
let secondDropdownBtn = document.getElementsByClassName('dropdown')[1];
let firstInnerLinks = document.getElementsByClassName('inner-list')[0];
let secondInnerLinks = document.getElementsByClassName('inner-list')[1];

firstDropdownBtn.addEventListener('click', () => {
    firstInnerLinks.classList.toggle('active-dropdown');
    secondInnerLinks.classList.toggle('inactive-dropdown');
})

secondDropdownBtn.addEventListener('click', () => {
    secondInnerLinks.classList.toggle('active-dropdown');
    firstInnerLinks.classList.toggle('inactive-dropdown');
})