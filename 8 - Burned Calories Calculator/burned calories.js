document.addEventListener('DOMContentLoaded', function() {
    getSum();
})
let sum = 0
function getSum() {
    document.addEventListener('click', function() {
        let exercises = document.querySelectorAll('li');
        exercises.forEach(function(exercise) {
            sum = sum + 1;
            console.log(sum)
        });
    });
    

}






/*const form = document.querySelector("form")

const keys = form.querySelector(".switch")

keys.addEventListener("click", e => {
    if (e.target.matches(".switch")){

    }
})

const key = e.target*/