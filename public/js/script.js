const menu = document.querySelector('nav ul')
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', ()=>{
    menu.classList.add('display');
})

closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('display');
})

// Scroll sticky navbar
window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 20){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})

// static numbers
const countersEl = document.querySelectorAll('.number'); 

countersEl.forEach((counter) => {
    counter.textContent = 0;

    function incrementCounter() {
        let currentNumber = +counter.textContent;
        const dataCeil = counter.getAttribute("data-ceil");

        const increment = dataCeil / 25;
        
        currentNumber = Math.ceil(currentNumber + increment);

        if (currentNumber < dataCeil) {
            counter.textContent = currentNumber;
            setTimeout(incrementCounter, 30);
        } else {
            counter.textContent = dataCeil;
        }
    }

    incrementCounter(); // Call the function to start incrementing
});

// scroll up
let scrollTopBtn = document.getElementById("scrollTopBtn");

    // When the user scrolls down 2 sections from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        // Change this value to the height of 2 sections
        let scrollHeight = window.innerHeight * 1;
        if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    scrollTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

