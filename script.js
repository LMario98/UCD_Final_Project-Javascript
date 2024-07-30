// const photo1 = document.querySelector(".london photo0")
const titleH1 = document.querySelector(".title") 

const photo0 = document.querySelector(".photo0")

const photo1 = document.querySelector(".photo1")

const photo2 = document.querySelector(".photo2")

const photo3 = document.querySelector(".photo3")

const photo4 = document.querySelector(".photo4")

const photo5 = document.querySelector(".photo5")

const photo6 = document.querySelector(".photo6")

const photo7 = document.querySelector(".photo7")

const photo8 = document.querySelector(".photo8")

const photo9 = document.querySelector(".photo9")

const photo10 = document.querySelector(".photo10")

const photo11 = document.querySelector(".photo11")

const photo12 = document.querySelector(".photo12")


titleH1.addEventListener("click", function(){               
        titleH1.style.background = "blueviolet"
});


 photo0.addEventListener("mouseover", function(){
        photo0.classList.add("test")
});


photo0.addEventListener("mouseout", function(){
        photo0.classList.remove("test")
});

photo1.addEventListener("mouseover", function(){
        photo1.classList.add("test")
});


photo1.addEventListener("mouseout", function(){
        photo1.classList.remove("test")
});

photo2.addEventListener("mouseover", function(){
        photo2.classList.add("test")
});

photo2.addEventListener("mouseout",function(){
        photo2.classList.remove("test")
});

photo3.addEventListener("mouseover", function(){
        photo3.classList.add("test")
});

photo3.addEventListener("mouseout",function(){
        photo3.classList.remove("test")
});

photo4.addEventListener("mouseover", function(){
        photo4.classList.add("test")
});

photo4.addEventListener("mouseout",function(){
        photo4.classList.remove("test")
});

photo5.addEventListener("mouseover", function(){
        photo5.classList.add("test")
});

photo5.addEventListener("mouseout",function(){
        photo5.classList.remove("test")
});


photo6.addEventListener("mouseover", function(){
        photo6.classList.add("test")
});

photo6.addEventListener("mouseout",function(){
        photo6.classList.remove("test")
});

photo7.addEventListener("mouseover", function(){
        photo7.classList.add("test")
});

photo7.addEventListener("mouseout",function(){
        photo7.classList.remove("test")
});

photo8.addEventListener("mouseover", function(){
        photo8.classList.add("test")
});

photo8.addEventListener("mouseout",function(){
        photo8.classList.remove("test")
});

photo9.addEventListener("mouseover", function(){
        photo9.classList.add("test")
});

photo9.addEventListener("mouseout",function(){
        photo9.classList.remove("test")
});

photo10.addEventListener("mouseover", function(){
        photo10.classList.add("test")
});

photo10.addEventListener("mouseout",function(){
        photo10.classList.remove("test")
});

photo11.addEventListener("mouseover", function(){
        photo11.classList.add("test")
});

photo11.addEventListener("mouseout",function(){
        photo11.classList.remove("test")
});
photo12.addEventListener("mouseover", function(){
        photo12.classList.add("test")
});

photo12.addEventListener("mouseout",function(){
        photo12.classList.remove("test")
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("london-photo0");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000);
}


document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contact-form');
        const confirmationMessage = document.getElementById('form-confirmation');
    
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Form Validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }
    
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show confirmation message
            contactForm.style.display = 'none';
            confirmationMessage.style.display = 'block';
        });
    
        // Real-time validation for email
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('input', function() {
            if (!validateEmail(emailInput.value)) {
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '#ccc';
            }
        });
    
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    });