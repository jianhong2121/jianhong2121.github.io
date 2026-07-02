// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle (if needed for smaller screens)
const menuToggle = () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('mobile-menu');
    }
};

// Add current year to footer
const updateCopyright = () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Bay Area Biking Guide. All rights reserved.`;
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCopyright();
    
    // Add animation classes to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe trail cards and route items for animation
    document.querySelectorAll('.trail-card, .route-item, .safety-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Simple weather API integration (placeholder)
const updateWeather = async () => {
    try {
        // This would be replaced with actual weather API call
        // Example: const response = await fetch('https://api.weather.com/...');
        console.log('Weather data would be loaded here');
    } catch (error) {
        console.log('Weather service temporarily unavailable');
    }
};

// Call weather update when page loads
if (document.getElementById('weather')) {
    updateWeather();
}