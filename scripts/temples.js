document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const menu = document.querySelector(".menu");

    hamburgerBtn.addEventListener("click", function() {
        menu.classList.toggle("show"); 

        
        if (menu.classList.contains("show")) {
            hamburgerBtn.innerHTML = "&#10006;"; 
        } else {
            hamburgerBtn.innerHTML = "&#9776;"; 
        }
    });
}); 
