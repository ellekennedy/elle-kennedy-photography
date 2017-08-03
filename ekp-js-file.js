function myFunction() {
    var x = document.getElementById("topmenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
