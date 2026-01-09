function openProjects() {
    document.getElementById('projects-page').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjects() {
    document.getElementById('projects-page').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Get all sections and navigation elements
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const indicatorDots = document.querySelectorAll('.indicator-dot');

// Function to update active section
function updateActiveSection(sectionId) {
    // Update navbar class
    navbar.className = `section-${sectionId}`;

    // Update active nav link
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update indicator dots
    indicatorDots.forEach(dot => {
        if (dot.dataset.section === sectionId) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Intersection Observer to detect which section is in view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            updateActiveSection(sectionId);
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Click handlers for indicator dots
indicatorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionId = dot.dataset.section;
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});