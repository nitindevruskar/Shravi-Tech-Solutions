// Loader Element Control Loop
window.addEventListener('load', function() {
    const loader = document.getElementById("loader");
    if(loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 300);
    }
});

// =======================================
// INTERACTIVE PRO-TYPE SLIDE SHOW LOGIC
// =======================================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.getElementById('prevSlideBtn');
const nextBtn = document.getElementById('nextSlideBtn');

let currentSlideIndex = 0;
let slideInterval;

function updateSlideView(index) {
    // Remove active markers from everywhere
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Re-verify bounds security
    if (index >= slides.length) { currentSlideIndex = 0; }
    else if (index < 0) { currentSlideIndex = slides.length - 1; }
    else { currentSlideIndex = index; }

    // Activate the current slide items
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    updateSlideView(currentSlideIndex + 1);
}

function prevSlide() {
    updateSlideView(currentSlideIndex - 1);
}

// Attach Button Controls listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetSlideTimer();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetSlideTimer();
});

// Dot Tracking Indicators configuration
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetedIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlideView(targetedIndex);
        resetSlideTimer();
    });
});

// Auto rotation time loop runner loop
function startSlideTimer() {
    slideInterval = setInterval(nextSlide, 6000); // Rotates every 6 seconds smoothly
}

function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
}

// Initialize components loop execution
startSlideTimer();


// Scroll Top Tracking Metric
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Application Interface Dark Mode Toggle
const darkToggleBtn = document.getElementById("darkToggle");
darkToggleBtn.onclick = function() {
    document.body.classList.toggle("dark");
    
    if(document.body.classList.contains("dark")) {
        darkToggleBtn.textContent = "☀️";
    } else {
        darkToggleBtn.textContent = "🌙";
    }
};