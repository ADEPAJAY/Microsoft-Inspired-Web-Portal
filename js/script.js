// 1. Search functionality
const searchButton = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== "") {
        alert(`Searching for "${query}"...`);
    } else {
        alert("Please enter something to search!");
    }
});

// 2. Banner "Learn More" smooth scroll
const learnMoreButton = document.querySelector('.banner-text .btn');
const productsSection = document.querySelector('.products');

learnMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    productsSection.scrollIntoView({ behavior: 'smooth' });
});

// 3. Product buttons ("Shop Now", "Buy Now", "Get Started") + Cart Update
const productButtons = document.querySelectorAll('.product .btn');
const cartCount = document.getElementById('cart-count');
let count = 0;

productButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = button.parentElement.querySelector('h3').innerText;

        // Increase cart count
        count++;
        cartCount.innerText = count;
    });
});

// 4. Footer "Follow Us" links
const followUsText = document.querySelector('footer p');

followUsText.addEventListener('click', () => {
    alert("Opening our social media pages...");
});



// 6. Ripple effect on buttons (all buttons)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const maxDim = Math.max(this.clientWidth, this.clientHeight);
        ripple.style.width = ripple.style.height = maxDim + 'px';
        ripple.style.left = (e.clientX - this.getBoundingClientRect().left - maxDim / 2) + 'px';
        ripple.style.top = (e.clientY - this.getBoundingClientRect().top - maxDim / 2) + 'px';

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 7. Shrink header on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// 8. Floating subtle dots background
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let particles = [];

for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(200,200,255,0.5)';
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(drawParticles);
}

drawParticles();
