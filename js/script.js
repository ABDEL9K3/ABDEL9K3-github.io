// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields.");
    } else {
        alert("Message sent!"); // You can replace this with actual form submission logic
    }
});

// Optional: Mobile menu toggle (if you want to add a mobile menu)
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.classList.add('nav-toggle');
document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});

// CSS for mobile menu (add to your CSS file)
const style = document.createElement('style');
style.textContent = `
.nav-toggle {
    background: #e8491d;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    display: none; /* Hide by default */
}

nav ul.active {
    display: block; /* Show menu when active */
}

@media (max-width: 600px) {
    nav ul {
        display: none; /* Hide by default on small screens */
        flex-direction: column; /* Stack vertically */
    }

    .nav-toggle {
        display: block; /* Show toggle button */
    }
}
`;
document.head.appendChild(style);
