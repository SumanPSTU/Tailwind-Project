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



const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000, // Fixed typo in 'delay'
        disableOnInteraction: false
    },
  
    // Pagination settings
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
  
    // Add navigation arrows (optional)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  
    // Grab cursor setting (corrected typo 'grubCursor' to 'grabCursor')
    grabCursor: true,
  
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3 // Adjusted for better usability on larger screens
        }
    }
});
