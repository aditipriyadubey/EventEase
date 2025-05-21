// Slider Functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 320}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 3) { // Show 3 slides at a time
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Top 5 Events (Random for now)
const allEvents = [
    { name: "Summer Beats Festival", location: "New York, USA", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Tech Summit 2023", location: "London, UK", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    // Add ALL your events here (same as in HTML)
];

function displayTopEvents() {
    const topEventsContainer = document.querySelector('.top-events-grid');
    const shuffled = [...allEvents].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    topEventsContainer.innerHTML = shuffled.map(event => `
        <div class="event-card">
            <img src="${event.image}" alt="${event.name}">
            <div class="event-info">
                <h3>${event.name}</h3>
                <p>${event.location}</p>
            </div>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayTopEvents();
});