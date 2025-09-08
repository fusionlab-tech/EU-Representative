// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections for animation
    const animatedElements = document.querySelectorAll('.about-card, .benefit-card, .position-details, .cta-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button click handlers
    const applyButtons = document.querySelectorAll('.btn-primary:not(#sendEmailBtn)');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show email modal
            const modal = document.getElementById('emailModal');
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    const learnMoreButtons = document.querySelectorAll('.btn-secondary');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to about section
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Download job description button
    const downloadButton = document.querySelector('.btn-outline');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Create a simple text file with job description
            const jobDescription = `FusionLab - Europe Representative Position

Position Overview:
Would you like to join a global software company in a flexible role? FusionLab is seeking representatives in Europe to help us build connections and support our remote engineering team. As a representative, you won't need to be a software engineer – your role will focus on hosting company equipment and acting as a local contact. It's a simple yet important role that offers consistent collaboration, competitive pay, and the chance to grow with FusionLab's international projects.

Key Responsibilities:
- Host company equipment in your location
- Act as a local contact point
- Build connections in your region
- Support remote engineering teams
- Represent FusionLab locally

Benefits:
- Competitive pay
- Flexible role
- Global network
- Growth opportunities

Location: Europe
Type: Flexible/Part-time
Experience: No engineering background required

To apply, please contact us through our website or email.`;

            const blob = new Blob([jobDescription], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'FusionLab_Europe_Representative_Job_Description.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.about-card, .benefit-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.nav');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggle = document.createElement('button');
                toggle.className = 'mobile-menu-toggle';
                toggle.innerHTML = '<i class="fas fa-bars"></i>';
                toggle.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #667eea;
                    cursor: pointer;
                    display: block;
                `;
                
                header.appendChild(toggle);
                
                toggle.addEventListener('click', function() {
                    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                });
            }
        }
    };

    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Modal functionality
    const modal = document.getElementById('emailModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancelBtn');
    const sendEmailBtn = document.getElementById('sendEmailBtn');

    // Close modal when clicking X or Cancel
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Send email functionality
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', function() {
            const email = 'nathanfielder0530@gmail.com';
            const subject = 'Application for Europe Representative Position - FusionLab';
            const body = `Dear Hiring Manager,

I am writing to express my interest in the Europe Representative position at FusionLab. I am excited about the opportunity to join your global team and contribute to building connections, supporting your remote engineering team, and conducting proxy interviews.

Please find my application details below:

Name: [Your Name]
Email: [Your Email]
Location: [Your City, Country]
Phone: [Your Phone Number]

Why I'm interested in this role:
[Brief paragraph about your interest and relevant experience, including any interview or communication skills]

I look forward to hearing from you and discussing how I can contribute to FusionLab's international projects.

Best regards,
[Your Name]`;

            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, '_blank');
        });
    }
});
