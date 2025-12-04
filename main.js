// -----------------------------
// Navigation Effects
// -----------------------------
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Scroll effect - add background when scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Mobile menu toggle
mobileMenuBtn?.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + window.innerHeight / 3;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    // Check if at bottom of page - activate last section
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = 'about';
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Nav link hover sound effect (optional visual feedback)
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Add a subtle animation class
        link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// -----------------------------
// Cursor Glow Effect
// -----------------------------
const cursorGlow = document.getElementById('cursorGlow');
const cursorTrail = document.getElementById('cursorTrail');

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instant trail update
    cursorTrail.style.left = mouseX + 'px';
    cursorTrail.style.top = mouseY + 'px';
});

// Smooth glow follow
function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    
    requestAnimationFrame(animateGlow);
}
animateGlow();

// Click effect
document.addEventListener('mousedown', () => {
    cursorTrail.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cursorTrail.classList.remove('clicking');
});

// Hide cursor on mobile
if ('ontouchstart' in window) {
    cursorGlow.style.display = 'none';
    cursorTrail.style.display = 'none';
}

// -----------------------------
// Floating Particles
// -----------------------------
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Random colors
        const colors = ['#0ff', '#8b5cf6', '#00ff88', '#ff00ff'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 6px ${particle.style.background}`;
        
        container.appendChild(particle);
    }
}
createParticles();

// -----------------------------
// Project Data with 4 Screenshots Each
// -----------------------------
const gameData = [
    {
        title: "Noli Me Tangere Game",
        desc: "An interactive educational game that brings Jose Rizal's classic novel to life. Experience an immersive storytelling adventure that combines Philippine literature with engaging gameplay mechanics, making learning about Filipino heritage fun and memorable.",
        platform: "PC / Mobile",
        engine: "Unity C#",
        role: "Lead Programmer",
        year: 2024,
        objectives: [
            "Create interactive story sequences",
            "Implement character dialogue system",
            "Design educational mini-games",
            "Build immersive narrative experience"
        ],
        images: [
            "1screenshotgame1.png",
            "2screenshotgame1.png",
            "3screenshotgame1.png",
            "4screenshotgame1.png"
        ]
    },
    {
        title: "Survive Freaky Goblins",
        desc: "A thrilling survival roguelike inspired by Vampire Survivors. Battle endless waves of freaky goblins, collect power-ups, unlock new abilities, and survive as long as possible in this action-packed bullet heaven game.",
        platform: "PC",
        engine: "Unity 2D",
        role: "Lead Programmer",
        year: 2024,
        objectives: [
            "Implement auto-attack combat system",
            "Create enemy wave spawning logic",
            "Design power-up and upgrade system",
            "Build procedural difficulty scaling"
        ],
        images: [
            "1screenshotgame2.png",
            "2screenshotgame2.png",
            "3screenshotgame2.png",
            "4screenshotgame2.png"
        ]
    },
    {
        title: "Wizdodge",
        desc: "A magical wizard dodgeball game where spells meet sports! Choose your wizard, master unique skills, dodge incoming attacks, and upgrade your abilities to become the ultimate dodgeball champion in this fast-paced arcade action game.",
        platform: "PC / Mobile",
        engine: "Unity 2D",
        role: "Lead Programmer",
        year: 2024,
        objectives: [
            "Design wizard skill system",
            "Implement dodgeball physics",
            "Create upgrade progression tree",
            "Build multiplayer mechanics"
        ],
        images: [
            "1screenshotgame3.png",
            "2screenshotgame3.png",
            "3screenshotgame3.png",
            "4screenshotgame3.png"
        ]
    },
    {
        title: "Chozen Way!",
        desc: "An intense hack and slash 2D platformer where every choice matters. Slash through enemies, navigate challenging platforms, discover hidden paths, and carve your own destiny in this action-packed adventure.",
        platform: "PC / Mobile",
        engine: "Unity 2D",
        role: "Lead Programmer",
        year: 2024,
        objectives: [
            "Create fluid combat combo system",
            "Design challenging platforming levels",
            "Implement enemy AI behaviors",
            "Build character progression system"
        ],
        images: [
            "1screenshotgame4.png",
            "2screenshotgame4.png",
            "3screenshotgame4.png",
            "4screenshotgame4.png"
        ]
    }
];

const uiData = [
    {
        title: "UI Design Project",
        desc: "A comprehensive UI/UX design prototype created in Figma. Features modern design principles, intuitive user flows, and a clean visual aesthetic optimized for user experience.",
        platform: "Web / Mobile",
        engine: "Figma",
        role: "UI/UX Designer",
        year: 2024,
        objectives: [
            "Create intuitive user interface",
            "Design responsive layouts",
            "Build interactive prototypes",
            "Implement design system"
        ],
        images: [
            "1screenshotUi1.png",
            "2screenshotUi1.png",
            "3screenshotUi1.png",
            "4screenshotUi1.png"
        ]
    },
    {
        title: "Web Project",
        desc: "A static website built with clean HTML structure. Focuses on semantic markup, accessibility best practices, and foundational web development principles.",
        platform: "Web",
        engine: "HTML",
        role: "Web Developer",
        year: 2024,
        objectives: [
            "Write semantic HTML structure",
            "Ensure accessibility compliance",
            "Optimize page performance",
            "Create responsive markup"
        ],
        images: [
            "1screenshotUi2.png",
            "2screenshotUi2.png",
            "3screenshotUi2.png",
            "4screenshotUi2.png"
        ]
    },
    {
        title: "Interactive Web Application",
        desc: "A full-featured interactive web application built with HTML, CSS, and JavaScript. Includes dynamic functionality, smooth animations, and a polished user interface.",
        platform: "Web",
        engine: "HTML/CSS/JavaScript",
        role: "Full Stack Developer",
        year: 2024,
        objectives: [
            "Build interactive features",
            "Implement responsive design",
            "Create smooth animations",
            "Develop dynamic functionality"
        ],
        images: [
            "1screenshotUi3.png",
            "2screenshotUi3.png",
            "3screenshotUi3.png",
            "4screenshotUi3.png"
        ]
    },
    {
        title: "UI/UX Design",
        desc: "A polished UI/UX design prototype showcasing modern interface design. Created in Figma with attention to user experience, visual hierarchy, and brand consistency.",
        platform: "Web / Mobile",
        engine: "Figma",
        role: "UI/UX Designer",
        year: 2024,
        objectives: [
            "Design visual components",
            "Create user flow diagrams",
            "Build clickable prototypes",
            "Establish style guidelines"
        ],
        images: [
            "1screenshotUi4.png",
            "2screenshotUi4.png",
            "3screenshotUi4.png",
            "4screenshotUi4.png"
        ]
    }
];

// -----------------------------
// Modal Elements
// -----------------------------
const modal = document.getElementById('modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalBox = document.querySelector('.modal-box');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPlatform = document.getElementById('modalPlatform');
const modalEngine = document.getElementById('modalEngine');
const modalRole = document.getElementById('modalRole');
const modalYear = document.getElementById('modalYear');
const modalObjectives = document.getElementById('modalObjectives');
const modalMainSlide = document.getElementById('modalMainSlide');
const modalSlideDots = document.getElementById('modalSlideDots');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const slideCounter = document.getElementById('slideCounter');

let currentSlide = 0;
let slides = [];
let isAnimating = false;

// -----------------------------
// Fallback Images (for demo)
// -----------------------------
const fallbackImages = {
    game: [
        'https://placehold.co/800x450/1a1a2e/00f3ff?text=Screenshot+1',
        'https://placehold.co/800x450/1a1a2e/00f3ff?text=Screenshot+2',
        'https://placehold.co/800x450/1a1a2e/00f3ff?text=Screenshot+3',
        'https://placehold.co/800x450/1a1a2e/00f3ff?text=Screenshot+4'
    ],
    ui: [
        'https://placehold.co/800x450/2a2a2a/bc13fe?text=UI+Screenshot+1',
        'https://placehold.co/800x450/2a2a2a/bc13fe?text=UI+Screenshot+2',
        'https://placehold.co/800x450/2a2a2a/bc13fe?text=UI+Screenshot+3',
        'https://placehold.co/800x450/2a2a2a/bc13fe?text=UI+Screenshot+4'
    ]
};

// -----------------------------
// Open Modal Function
// -----------------------------
function openModal(type, index) {
    const data = type === 'game' ? gameData[index] : uiData[index];
    
    // Populate modal content
    modalTitle.innerText = data.title;
    modalDesc.innerText = data.desc;
    modalPlatform.innerText = data.platform;
    modalEngine.innerText = data.engine;
    modalRole.innerText = data.role;
    modalYear.innerText = data.year;
    
    // Clear and populate objectives
    modalObjectives.innerHTML = '';
    data.objectives.forEach(obj => {
        const li = document.createElement('li');
        li.innerText = obj;
        modalObjectives.appendChild(li);
    });

    // Setup slides with fallback
    slides = data.images.map((img, i) => ({
        src: img,
        fallback: fallbackImages[type][i]
    }));
    
    currentSlide = 0;
    
    // Show modal with animation
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Trigger animations
    requestAnimationFrame(() => {
        modalBackdrop.classList.add('show');
        modalBox.classList.add('show');
    });
    
    // Initialize slider
    updateSlide();
    createThumbnails(type);
}

// -----------------------------
// Close Modal Function
// -----------------------------
function closeModal() {
    // Animate out
    modalBackdrop.classList.remove('show');
    modalBox.classList.remove('show');
    
    // Hide after animation
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 400);
}

// -----------------------------
// Create Thumbnails
// -----------------------------
function createThumbnails(type) {
    thumbnailContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const thumb = document.createElement('img');
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.src = slide.src;
        thumb.onerror = function() {
            this.src = slide.fallback;
        };
        thumb.onclick = () => goToSlide(index);
        thumbnailContainer.appendChild(thumb);
    });
}

// -----------------------------
// Update Thumbnails Active State
// -----------------------------
function updateThumbnails() {
    const thumbs = thumbnailContainer.querySelectorAll('.thumbnail');
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlide);
    });
}

// -----------------------------
// Slide Navigation
// -----------------------------
function changeSlide(direction) {
    if (isAnimating) return;
    
    let newSlide = currentSlide + direction;
    
    // Wrap around
    if (newSlide < 0) newSlide = slides.length - 1;
    if (newSlide >= slides.length) newSlide = 0;
    
    animateSlide(newSlide);
}

function goToSlide(index) {
    if (isAnimating || index === currentSlide) return;
    animateSlide(index);
}

// -----------------------------
// Animate Slide Transition
// -----------------------------
function animateSlide(newIndex) {
    isAnimating = true;
    
    // Fade out current
    modalMainSlide.classList.add('fade-out');
    modalMainSlide.classList.remove('fade-in');
    
    setTimeout(() => {
        currentSlide = newIndex;
        
        // Update image source
        modalMainSlide.src = slides[currentSlide].src;
        modalMainSlide.onerror = function() {
            this.src = slides[currentSlide].fallback;
        };
        
        // Fade in new
        modalMainSlide.classList.remove('fade-out');
        modalMainSlide.classList.add('fade-in');
        
        // Update UI
        updateDots();
        updateThumbnails();
        updateCounter();
        
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }, 250);
}

// -----------------------------
// Update Slide (Initial Load)
// -----------------------------
function updateSlide() {
    modalMainSlide.src = slides[currentSlide].src;
    modalMainSlide.onerror = function() {
        this.src = slides[currentSlide].fallback;
    };
    modalMainSlide.classList.add('fade-in');
    
    updateDots();
    updateCounter();
}

// -----------------------------
// Update Dots
// -----------------------------
function updateDots() {
    modalSlideDots.innerHTML = '';
    
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `slide-dot ${index === currentSlide ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        modalSlideDots.appendChild(dot);
    });
}

// -----------------------------
// Update Counter
// -----------------------------
function updateCounter() {
    slideCounter.innerText = `${currentSlide + 1} / ${slides.length}`;
}

// -----------------------------
// Keyboard Support
// -----------------------------
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    
    switch(e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            changeSlide(-1);
            break;
        case 'ArrowRight':
            changeSlide(1);
            break;
    }
});

// -----------------------------
// Touch/Swipe Support
// -----------------------------
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('sliderContainer')?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.getElementById('sliderContainer')?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            changeSlide(1); // Swipe left = next
        } else {
            changeSlide(-1); // Swipe right = prev
        }
    }
}

// -----------------------------
// Fade-in Sections on Scroll
// -----------------------------
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// -----------------------------
// Smooth Scroll for Nav Links
// -----------------------------
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

// -----------------------------
// Auto-play Slider (Optional)
// -----------------------------
let autoPlayInterval = null;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        if (!modal.classList.contains('hidden')) {
            changeSlide(1);
        }
    }, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Uncomment to enable auto-play:
// startAutoPlay();

// -----------------------------
// Stats Counter Animation
// -----------------------------
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 50);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 50);
}

animateStats();