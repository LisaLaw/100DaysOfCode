window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementsByClassName("dropdown-content").style.padding = "10px";
    }
    else {
        document.getElementById("navbar").style.padding = "35px 10px";
        document.getElementsByClassName("dropdown-content").style.padding = "10px";
    }
}