// toggle button 
const navMenu =document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const humBurger = document.getElementById("humburger");
humBurger.addEventListener('click',()=>{
    navMenu.classList.toggle("left-[0]");
    humBurger.classList.toggle("ri-close-large-line");
});

navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        navMenu.classList.toggle("left-[0]");
        humBurger.classList.toggle("ri-close-large-line");
    });
})