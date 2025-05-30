// Typed.js for Hero Section
const typed = new Typed('#typed-text', {
    strings: ['Web Developer', 'UI/UX Enthusiast', 'Frontend Specialist'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// Filter Projects
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
            project.classList.add('animate-slide-up');
        } else {
            project.style.display = 'none';
        }
    });
}

// Dynamic Date and Time
function updateDateTime() {
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = `Date: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}`;
    }
}
setInterval(updateDateTime, 1000);

// Form Validation with Real-Time Feedback
const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.classList.remove('border-red-500');
            input.classList.add('border-teal-500');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
        feedback.textContent = 'Please fill all fields!';
        feedback.style.color = '#f43f5e';
        if (!name) document.getElementById('name').classList.add('border-red-500');
        if (!email) document.getElementById('email').classList.add('border-red-500');
        if (!message) document.getElementById('message').classList.add('border-red-500');
    } else if (!emailRegex.test(email)) {
        feedback.textContent = 'Please enter a valid email!';
        feedback.style.color = '#f43f5e';
        document.getElementById('email').classList.add('border-red-500');
    } else {
        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = '#14b8a6';
        e.target.reset();
        inputs.forEach(input => input.classList.remove('border-teal-500', 'border-red-500'));
    }
    setTimeout(() => { feedback.textContent = ''; }, 3000);
});

// Scroll-Triggered Animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load Theme Preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initial call to set date
updateDateTime();