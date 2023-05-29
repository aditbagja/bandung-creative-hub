const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cardItems = carousel.getElementsByClassName('card-item-black');

let currentPosition = 0;
const cardWidth = cardItems[0].offsetWidth;
const cardMarginRight = parseInt(window.getComputedStyle(cardItems[0]).marginRight);
// const cardMarginRight = 0;

// Set ukuran carousel sesuai dengan jumlah card item yang ditampilkan
// carousel.style.width = "100%";
carousel.style.width = ((cardWidth + cardMarginRight) * 4 - cardMarginRight) + 'px';

// Fungsi untuk menggeser carousel ke posisi yang ditentukan
function slideCarousel() {
  carousel.style.transform = `translateX(-${currentPosition}px)`;
}

// Event listener untuk tombol slide kiri
prevButton.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition -= cardWidth + cardMarginRight;
    slideCarousel();
  }
});

// Event listener untuk tombol slide kanan
nextButton.addEventListener('click', () => {
  if (currentPosition < (cardItems.length - 4) * (cardWidth + cardMarginRight)) {
    currentPosition += cardWidth + cardMarginRight;
    slideCarousel();
  }
});


