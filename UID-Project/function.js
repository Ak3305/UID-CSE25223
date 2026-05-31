// Mega Menu Toggle
function toggleMenu() {
  document.getElementById('megaMenu').classList.toggle('active');
}

// Carousel Logic - Forward direction, 4 seconds
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const bars = document.querySelectorAll('.carousel-bar');
const totalSlides = slides.length;
let carouselInterval;

function updateCarousel() {
  document.getElementById('carouselTrack').style.transform = `translateX(-${currentSlide * 100}%)`;
  bars.forEach((bar, i) => {
    bar.classList.toggle('active', i === currentSlide);
    const p = bar.querySelector('.bar-progress');
    p.style.animation = 'none';
    setTimeout(() => {
      p.style.animation = i === currentSlide ? 'fillBar 4s linear' : 'none';
    }, 10);
  });
}

function changeSlide(d) {
  currentSlide = (currentSlide + d + totalSlides) % totalSlides;
  updateCarousel();
  resetCarouselTimer();
}

function goToSlide(i) {
  currentSlide = i;
  updateCarousel();
  resetCarouselTimer();
}

function resetCarouselTimer() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 4000);
}

// Initialize Carousel
carouselInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}, 4000);

// Horizontal Scroll Function
function scrollSection(id, d) {
  document.getElementById(id).scrollBy({ left: d * 200, behavior: 'smooth' });
}

// Wishlist Toggle (Switches icon source between outline and filled)
function toggleWishlist(btn) {
  btn.classList.toggle('active');
  const img = btn.querySelector('.wishlist-icon');
  
  // Ensure your icons folder has 'heart-outline.svg' and 'heart-filled.svg'
  if (btn.classList.contains('active')) {
    img.src = 'heart-filled.png'; 
  } else {
    img.src = 'heart.png'; 
  }
}