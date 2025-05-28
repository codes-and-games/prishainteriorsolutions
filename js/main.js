// Prisha Interior Solutions - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Initialize FAQ accordions
    initFaqAccordions();
    
    // Initialize project filters
    initProjectFilters();
    
    // Initialize contact form
    initContactForm();
});

// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
        header.classList.remove('blurred');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
        header.classList.add('blurred');
    }
    lastScrollY = window.scrollY;
});

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
}


// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.floating-navbar');
    const hero = document.querySelector('.hero');
    if (!header || !hero) return;

    function handleNavbar() {
        const heroBottom = hero.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
            header.classList.add('minimized');
        } else {
            header.classList.remove('minimized');
        }
    }
    window.addEventListener('scroll', handleNavbar);
    handleNavbar();
}



function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open', mainNav.classList.contains('active'));
        });
        // Close mobile menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}


// Project Filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                phone: contactForm.phone ? contactForm.phone.value : '',
                service: contactForm.service ? contactForm.service.value : '',
                message: contactForm.message.value
            };
            
            // Basic form validation
            if (!formData.name || !formData.email || !formData.message) {
                formStatus.innerHTML = 'Please fill out all required fields.';
                formStatus.className = 'form-status error';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                formStatus.innerHTML = 'Please enter a valid email address.';
                formStatus.className = 'form-status error';
                return;
            }
            
            // Simulate form submission
            formStatus.innerHTML = 'Sending message...';
            formStatus.className = 'form-status';
            
            // Simulate API call/form processing
            setTimeout(function() {
                // Success scenario
                formStatus.innerHTML = 'Thank you! Your message has been sent successfully.';
                formStatus.className = 'form-status success';
                contactForm.reset();
                
                // Reset status message after 5 seconds
                setTimeout(function() {
                    formStatus.innerHTML = '';
                    formStatus.className = 'form-status';
                }, 5000);
            }, 1500);
            
            // In a real application, you would send this data to your server or a form handling service
            // Example with fetch:
            /*
            fetch('your-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                formStatus.innerHTML = 'Thank you! Your message has been sent successfully.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            })
            .catch(error => {
                formStatus.innerHTML = 'There was an error sending your message. Please try again.';
                formStatus.className = 'form-status error';
            });
            */
        });
    }
}