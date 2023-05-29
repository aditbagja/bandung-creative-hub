const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cardItems = carousel.getElementsByClassName('card-item-black');

let currentPosition = 0;
const cardWidth = cardItems[0].offsetWidth;
const cardMarginRight = parseInt(window.getComputedStyle(cardItems[0]).marginRight);

// Set ukuran carousel sesuai dengan jumlah card item yang ditampilkan\
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


// carousels white
const carouselWhite = document.getElementById('carousel-white');
const prevButtonwhite = document.getElementById('prevButton-white');
const nextButtonwhite = document.getElementById('nextButton-white');
const cardItemswhite = carouselWhite.getElementsByClassName('card-item');

let currentPositionwhite = 0;
const cardWidthwhite = cardItemswhite[0].offsetWidth;
const cardMarginRightwhite = parseInt(window.getComputedStyle(cardItemswhite[0]).marginRight);

carouselWhite.style.width = ((cardWidthwhite + cardMarginRightwhite) * 3.3 - cardMarginRightwhite) + 'px';

function slideCarouselwhite() {
    carouselWhite.style.transform = `translateX(-${currentPositionwhite}px)`;
  }

//button white version
prevButtonwhite.addEventListener('click', () => {
    if (currentPositionwhite > 0) {
      currentPositionwhite -= cardWidthwhite + cardMarginRightwhite;
      slideCarouselwhite();
    }
});
nextButtonwhite.addEventListener('click', () => {
    if (currentPositionwhite < (cardItemswhite.length - 3) * (cardWidthwhite + cardMarginRightwhite)) {
      currentPositionwhite += cardWidthwhite + cardMarginRightwhite;
      slideCarouselwhite();
    }
});
