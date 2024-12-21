// Euretek Scripts

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });


    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero Section Animations
    const heroText = document.querySelector('.hero h1');
    const heroSubText = document.querySelector('.hero h2');
    const heroButton = document.querySelector('.hero button');
    if (heroText && heroSubText && heroButton) {
        window.addEventListener('load', () => {
            heroText.style.opacity = 1;
            heroText.style.transform = 'translateY(0)';
            setTimeout(() => {
                heroSubText.style.opacity = 1;
                heroSubText.style.transform = 'translateY(0)';
            }, 500);
            setTimeout(() => {
                heroButton.style.opacity = 1;
                heroButton.style.transform = 'translateY(0)';
            }, 1000);
        });
    }

    // Features Hover Effect
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => item.classList.add('active'));
        item.addEventListener('mouseleave', () => item.classList.remove('active'));
    });

    // Testimonials Carousel
    const testimonials = document.querySelectorAll('.testimonial-item');
    const totalTestimonials = testimonials.length;
    let currentTestimonial = 0;
    if (totalTestimonials > 1) {
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('testimonial-visible');
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            testimonials[currentTestimonial].classList.add('testimonial-visible');
        }, 5000);
    }

    // Portfolio Hover Zoom Effect
    const portfolioImages = document.querySelectorAll('.portfolio-gallery img');
    if (portfolioImages.length) {
        portfolioImages.forEach(image => {
            image.addEventListener('mouseenter', () => image.style.transform = 'scale(1.1)');
            image.addEventListener('mouseleave', () => image.style.transform = 'scale(1)');
        });
    }
});

// JavaScript for Scroll Progress Tracker

// Create a function to track scroll progress
function updateProgressBar() {
    const scrollProgress = document.getElementById('scroll-progress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';
}

// Attach the function to the scroll event
window.addEventListener('scroll', updateProgressBar);

// Initialize the progress tracker when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create a progress bar element dynamically
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Style the progress bar via JavaScript
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        #scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 5px;
            background: linear-gradient(90deg, #3a86ff, #8338ec);
            width: 0;
            z-index: 1000;
            transition: width 0.25s ease-in-out;
        }
        body {
            margin: 0;
        }
    `;
    document.head.appendChild(styleElement);
});

// Typing Animation for Dynamic Headline
const dynamicText = document.getElementById("dynamic-text");
const words = ["Innovative", "Reliable", "Futuristic"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    dynamicText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause after typing the word
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
window.onload = typeEffect;

//loader effect
setTimeout(() => {
    loader.classList.add("hidden");
    content.style.display = "block";
}, 1500);

//js for custom movement
document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Move the cursor with the mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Change size and color when hovering over links or buttons
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const chatbotLauncher = document.getElementById('chatbot-launcher');
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const sendMessageButton = document.getElementById('send-message');
    const userMessageInput = document.getElementById('user-message');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle Chatbot Visibility
    chatbotLauncher.addEventListener('click', () => {
        chatbot.style.display = 'flex';
        chatbotLauncher.style.display = 'none';
    });

    chatbotToggle.addEventListener('click', () => {
        chatbot.style.display = 'none';
        chatbotLauncher.style.display = 'flex';
    });

    // Send and Display Messages
    sendMessageButton.addEventListener('click', sendMessage);
    userMessageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userMessageInput.value.trim();
        if (!userMessage) return;

        addMessage('user', userMessage);
        userMessageInput.value = '';

        // Simulate Bot Reply
        setTimeout(() => {
            const botReply = getBotResponse(userMessage);
            addMessage('bot', botReply);
        }, 1000);
    }

    function addMessage(sender, text) {
        const message = document.createElement('div');
        message.className = `message ${sender}`;
        message.textContent = text;
        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Simple responses; extend for real functionality
        const responses = {
            hello: "Hi there! How can I help you today?",
            pricing: "Our pricing plans are flexible. Visit the pricing section!",
            contact: "You can contact us at support@euretek.com.",
            default: "I'm not sure how to answer that, but I'll connect you with a human!",
        };

        const messageLower = userMessage.toLowerCase();
        return responses[messageLower] || responses.default;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    // Auto-rotate every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }, 5000);

    updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00bcd4"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00bcd4",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});

//portfolio
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update button active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/Hide Portfolio Items
            portfolioItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});


//parallax
document.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`; // Adjust speed with multiplier
});


document.addEventListener('mousemove', (e) => {
    const float1 = document.getElementById('float-1');
    const float2 = document.getElementById('float-2');

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Move elements in opposite directions
    float1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    float2.style.transform = `translate(${x * -50}px, ${y * -50}px)`;
});
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.quiz-question');
    const resultSection = document.getElementById('quiz-result');
    const solutionSpan = document.getElementById('quiz-solution');
    const badgeImage = document.getElementById('quiz-badge');
    const progressBar = document.getElementById('progress-bar');
    let currentQuestion = 0;
    let answers = { webDevelopment: 0, software: 0, marketing: 0 };

    // Handle option clicks
    questions.forEach((question, index) => {
        const options = question.querySelectorAll('.quiz-options button');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const answer = option.dataset.answer;

                // Increment score for selected answer
                answers[answer] = (answers[answer] || 0) + 1;

                // Update progress bar
                const progress = ((index + 1) / questions.length) * 100;
                progressBar.style.width = `${progress}%`;

                // Move to the next question or show results
                if (index < questions.length - 1) {
                    questions[index].classList.add('hidden');
                    questions[index + 1].classList.remove('hidden');
                } else {
                    showResults();
                }
            });
        });
    });

    // Show results
    function showResults() {
        const maxAnswer = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
        resultSection.classList.remove('hidden');
        solutionSpan.textContent = maxAnswer === 'web-development' ? "Web Development" : maxAnswer === 'software' ? "Software Development" : "Marketing";
        badgeImage.src = `images/${maxAnswer}-badge.png`;

        // Confetti animation
        generateConfetti();
    }

    // Confetti Animation
    function generateConfetti() {
        const body = document.body;
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.backgroundColor = getRandomColor();
            body.appendChild(confetti);

            setTimeout(() => body.removeChild(confetti), 2000);
        }
    }

    function getRandomColor() {
        const colors = ['#00bcd4', '#ff5722', '#ffc107', '#8bc34a', '#673ab7'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
