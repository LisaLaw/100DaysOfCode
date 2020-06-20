let toggleBtn = document.getElementsByClassName('toggle-button')[0]
let navLinksLeft = document.getElementsByClassName('nav-links')[0]
let navLinksRight = document.getElementsByClassName('nav-links')[2]

toggleBtn.addEventListener('click', () => {
    navLinksLeft.classList.toggle('active');
    navLinksRight.classList.toggle('active');
})