function myFunction() {
    var txt;
    var mood = prompt("How are you feeling?","");
    if (mood == null || mood == ""){
        txt = "Feeling empty today? Remember, you are not alone in the universe!";
    }
    else if (mood == "happy" || mood == "super" || mood == "fantastic" || mood == "Happy" || mood == "great" || mood == "Super" || mood == "Fantastic" || mood == "Great"){
        txt = "Yayy - you go champ!";
    }
    else if (mood == "sad" || mood == "Sad") {
        txt = "I'm sorry to hear. Do you need a hug?";
    }
    else if (mood == "angry" || mood == "upset" || mood == "Angry" || mood == "upset"){
        txt = "Go smash something - it might make you feel better.";
    }
    else if (mood == "ok" || mood == "OK") {
        txt = "That's all you can come up with? You should read more, it strengthens your vocabulary.";
    }
    else if (mood == "miserable" || mood == "Miserable") {
        txt = "Oh really? Sending you a virtual hug.";
    }
    else {
        txt = "I'm sorry, I don't know this mood. Wanna try again?";
    }
    document.getElementById("mytext").innerHTML = txt;
}

function create_stars() {
    for (let i = 0; i <= 50; i++) {
        let star = document.createElement("div");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.classList.add("stars");
        document.body.append(star);
    }
}

console.log("hallo");

create_stars();

