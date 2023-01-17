window.onscroll = () => {
    if (window.scrollY > 50) {
        document.getElementById("nav").classList.add("fakenav");
        document.getElementById("nav").classList.remove("nav");
    } else {
        document.getElementById("nav").classList.remove("fakenav");
        document.getElementById("nav").classList.add("nav");
    }
};
let gtdt = document.getElementById("navbar_right");
let myi = 0;
function myFunction() {
    if (myi == 0) {
        gtdt.style.display = "flex";
        myi++;
    } else if (myi == 1) {
        gtdt.style.display = "none";
        myi--;
    }
}
let myarr = [
    "Web Designer",
    "UI Developer",
    "Project co-ordinator",
];
let gt = document.getElementsByClassName("top_innerspan")[0];
let gt2 = document.getElementsByClassName("top_innerspan")[1];
var i = 0;
var intervalId = setInterval(function () {
    if (i <= myarr.length - 1) {
        gt.innerText = myarr[i];
        gt2.innerText = myarr[i];
        i++;
    } else {
        i = 0;
    }
}, 1000);
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
