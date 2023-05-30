const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cardItems = carousel.getElementsByClassName('card-item-black');

let currentPosition = 0;
const cardWidth = cardItems[0].offsetWidth;
const cardMarginRight = parseInt(window.getComputedStyle(cardItems[0]).marginRight);

// Set ukuran carousel sesuai dengan jumlah card item yang ditampilkan\
// carousel.style.width = ((cardWidth + cardMarginRight) * 4 - cardMarginRight) + 'px';


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
  const cardItemsPerRow = getCardItemsPerRow();
  if (currentPosition < (cardItems.length - cardItemsPerRow) * (cardWidth + cardMarginRight)) {
    currentPosition += cardWidth + cardMarginRight;
    slideCarousel();
  }
});
// responsive carousel
const cardItemsPerRow = getCardItemsPerRow();
function getCardItemsPerRow() {
  if (window.innerWidth >= 1920) {
    return 5.48; 
  } else if (window.innerWidth <= 1280) {
    return 3.71; 
  } else if (window.innerWidth >= 1281) {
    return 4; 
  }
}

function updateCarouselWidth() {
  const carouselWidth = ((cardWidth + cardMarginRight) * cardItemsPerRow - cardMarginRight) + 'px';
  carousel.style.width = carouselWidth;
}

// Panggil fungsi updateCarouselWidth saat window di-resize
window.addEventListener('resize', updateCarouselWidth);

// Panggil fungsi updateCarouselWidth saat halaman dimuat
window.addEventListener('load', updateCarouselWidth);
// responsive ends


// carousels white
const carouselWhite = document.getElementById('carousel-white');
const prevButtonwhite = document.getElementById('prevButton-white');
const nextButtonwhite = document.getElementById('nextButton-white');
const cardItemswhite = carouselWhite.getElementsByClassName('card-item');

let currentPositionwhite = 0;
const cardWidthwhite = cardItemswhite[0].offsetWidth;
const cardMarginRightwhite = parseInt(window.getComputedStyle(cardItemswhite[0]).marginRight);

// carouselWhite.style.width = ((cardWidthwhite + cardMarginRightwhite) * 3.3 - cardMarginRightwhite) + 'px';

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
  const cardItemsPerRowWhite = getCardItemsPerRowWhite();
    if (currentPositionwhite < (cardItemswhite.length - cardItemsPerRowWhite) * (cardWidthwhite + cardMarginRightwhite)) {

      currentPositionwhite += cardWidthwhite + cardMarginRightwhite;
      slideCarouselwhite();
    }
});

//responsive carousel white
const cardItemsPerRowWhite = getCardItemsPerRowWhite();

function getCardItemsPerRowWhite() {
  if (window.innerWidth >= 1920) {
    return 4;
  } else if (window.innerWidth >= 1227 && window.innerWidth <= 1280) {
    return 3; 
  } else if (window.innerWidth >= 1281 && window.innerWidth <= 1366){
    return 3.3; 
  } else if (window.innerWidth <= 960){
    return 2;
  }
}

function updateCarouselWidthWhite() {
  const carouselWidth = ((cardWidthwhite + cardMarginRightwhite) * cardItemsPerRowWhite - cardMarginRightwhite) + 'px';
  carouselWhite.style.width = carouselWidth;
}

// Panggil fungsi updateCarouselWidth saat window di-resize
window.addEventListener('resize', updateCarouselWidthWhite);

// Panggil fungsi updateCarouselWidth saat halaman dimuat
window.addEventListener('load', updateCarouselWidthWhite);
