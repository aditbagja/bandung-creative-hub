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