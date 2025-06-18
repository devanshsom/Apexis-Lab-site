// Greeting function with personalization
function launchGreeting() {
    const visitorName = prompt("Welcome to Apexis Labs! What should we call you?") || "Creative Mind";
    const welcomeMessage = `Hello ${visitorName}! 🌟\n\nWelcome to Apexis Labs, where innovation meets creativity. You're experiencing a live demonstration of how HTML structure, CSS styling, and JavaScript interactivity work together to create engaging web experiences.\n\nExplore our interactive features and see the magic of modern web development in action!`;
    alert(welcomeMessage);
}

// Enhanced date and time display
function displayDateTime() {
    const currentTime = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    const formattedTime = currentTime.toLocaleDateString('en-US', options);
    const timeMessage = `⏰ Current Date & Time:\n\n${formattedTime}\n\nThis real-time display showcases JavaScript's ability to work with live data and format information dynamically. Perfect for creating interactive dashboards and user interfaces!`;
    alert(timeMessage);
}

// Dynamic theme transformation
function transformTheme() {
    const themes = [
        {
            name: "Apexis Aurora",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
        },
        {
            name: "Sunset Glow",
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)"
        },
        {
            name: "Ocean Depths",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            name: "Forest Mist",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
        },
        {
            name: "Cosmic Purple",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
        },
        {
            name: "Neon Dreams",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        }
    ];
    
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.background = randomTheme.gradient;
    
    const themeMessage = `🎨 Theme Changed to: ${randomTheme.name}!\n\nThis demonstrates JavaScript's power to manipulate CSS properties in real-time. By accessing the DOM (Document Object Model), we can modify any visual element dynamically, creating responsive and interactive user experiences that adapt to user preferences.`;
    alert(themeMessage);
}

// Navigation section explorer
function exploreSection(section) {
    const sectionInfo = {
        'services': {
            title: 'Our Services',
            description: 'Apexis Labs offers comprehensive web development services including custom website design, responsive mobile optimization, e-commerce solutions, progressive web applications, and cutting-edge digital transformation consulting.'
        },
        'portfolio': {
            title: 'Our Portfolio',
            description: 'Explore our diverse collection of successful projects spanning various industries, from corporate websites to innovative web applications, mobile-first designs, and enterprise-level digital solutions that drive business growth.'
        },
        'team': {
            title: 'Our Team',
            description: 'Meet our passionate team of designers, developers, UX specialists, and digital strategists who work collaboratively to bring your vision to life with expertise, creativity, and cutting-edge technology solutions.'
        },
        'contact': {
            title: 'Contact Us',
            description: 'Ready to start your next project with Apexis Labs? Get in touch with us to discuss your ideas, requirements, and how we can help transform your digital presence into a powerful business asset.'
        }
    };
    
    const info = sectionInfo[section];
    alert(`📍 ${info.title}\n\n${info.description}\n\nThis navigation system demonstrates how JavaScript can create dynamic content experiences without page reloads, improving user engagement and site performance through seamless interactions.`);
}

// Enhanced page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Console welcome message
    console.log('🚀 Apexis Labs - Loaded Successfully!');
    console.log('='.repeat(50));
    console.log('✨ Features Demonstrated:');
    console.log('• Semantic HTML5 structure and accessibility');
    console.log('• Advanced CSS3 styling with animations');
    console.log('• Interactive JavaScript functionality');
    console.log('• Responsive design principles');
    console.log('• Modern web development practices');
    console.log('• Modular file structure (HTML, CSS, JS)');
    console.log('='.repeat(50));
    
    // Add interactive hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .portfolio-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Add typing effect to brand title
    const brandTitle = document.querySelector('.brand-title');
    if (brandTitle) {
        const originalText = brandTitle.textContent;
        brandTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                brandTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Additional visual effects and interactions
function createFloatingElements() {
    const container = document.querySelector('.main-container');
    const colors = ['rgba(255, 107, 107, 0.1)', 'rgba(78, 205, 196, 0.1)', 'rgba(69, 183, 209, 0.1)'];
    
    for (let i = 0; i < 8; i++) {
        const floater = document.createElement('div');
        floater.style.position = 'fixed';
        floater.style.width = (Math.random() * 20 + 10) + 'px';
        floater.style.height = floater.style.width;
        floater.style.background = colors[Math.floor(Math.random() * colors.length)];
        floater.style.borderRadius = '50%';
        floater.style.pointerEvents = 'none';
        floater.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        floater.style.left = Math.random() * 100 + '%';
        floater.style.top = Math.random() * 100 + '%';
        floater.style.zIndex = '-1';
        document.body.appendChild(floater);
        
        // Remove floater after animation completes
        setTimeout(() => {
            if (floater.parentNode) {
                floater.parentNode.removeChild(floater);
            }
        }, 10000);
    }
}

// Scroll-based animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .portfolio-item, .glass-card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', handleScrollAnimations);

// Initialize floating elements after page load
setTimeout(createFloatingElements, 1500);

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Button Animations
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('magic-btn')) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.height, rect.width);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(handleScrollAnimations, 100));

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Log successful initialization
console.log('🎯 Apexis Labs JavaScript initialized successfully!');
console.log('📁 File Structure: HTML + CSS + JS (Modular Architecture)');
console.log('⚡ All interactive features loaded and ready!');