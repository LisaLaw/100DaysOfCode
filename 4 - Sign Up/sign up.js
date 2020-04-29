function submit_function() {
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("pw").value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("Error - Please make sure you have filled in all fields.");
    }
    else {
        alert("You have signed up succesfully.");
    }
}
