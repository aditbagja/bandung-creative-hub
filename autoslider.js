// Mendapatkan elemen wrapper dan elemen kartu
const wrapper = document.querySelector('.wrapper');
const card = document.querySelector('.card');

// Mengatur variabel untuk mengatur kecepatan autoplay dan arah scroll
const autoplaySpeed = 2000; // Kecepatan autoplay dalam milidetik
let scrollDirection = 'right'; // Arah scroll awal, dalam contoh ini ke kanan

// Fungsi untuk menggerakkan slider
function autoScroll() {
  if (scrollDirection === 'right') {
    // Scroll ke kanan
    wrapper.scrollLeft += card.offsetWidth;
  } else {
    // Scroll ke kiri
    wrapper.scrollLeft -= card.offsetWidth;
  }
}

// Fungsi untuk mengatur arah scroll saat mencapai batas
function handleScrollBoundary() {
  if (scrollDirection === 'right') {
    // Jika mencapai batas kanan, ubah arah ke kiri
    if (wrapper.scrollLeft + wrapper.offsetWidth >= wrapper.scrollWidth) {
      scrollDirection = 'left';
    }
  } else {
    // Jika mencapai batas kiri, ubah arah ke kanan
    if (wrapper.scrollLeft === 0) {
      scrollDirection = 'right';
    }
  }
}

// Fungsi untuk memulai autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    autoScroll();
    handleScrollBoundary();
  }, autoplaySpeed);
}

// Fungsi untuk menghentikan autoplay
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Memulai autoplay saat halaman dimuat
startAutoplay();

// Menambahkan event listener untuk menghentikan autoplay saat kursor diarahkan ke slider
wrapper.addEventListener('mouseenter', stopAutoplay);

// Menambahkan event listener untuk melanjutkan autoplay saat kursor meninggalkan slider
wrapper.addEventListener('mouseleave', startAutoplay);


//slider card black
// Mendapatkan elemen wrapper dan elemen kartu
const wrapperBlack = document.querySelector('.wrapper-black');
const cardBlack = document.querySelector('.card-black');

// Mengatur variabel untuk mengatur kecepatan autoplay dan arah scroll
const autoplaySpeedBlack = 3000; // Kecepatan autoplay dalam milidetik
let scrollDirectionBlack = 'right'; // Arah scroll awal, dalam contoh ini ke kanan

// Fungsi untuk menggerakkan slider
function autoScrollBlack() {
  if (scrollDirectionBlack === 'right') {
    // Scroll ke kanan
    wrapperBlack.scrollLeft += cardBlack.offsetWidth;
  } else {
    // Scroll ke kiri
    wrapperBlack.scrollLeft -= cardBlack.offsetWidth;
  }
}

// Fungsi untuk mengatur arah scroll saat mencapai batas
function handleScrollBoundaryBlack() {
  if (scrollDirectionBlack === 'right') {
    // Jika mencapai batas kanan, ubah arah ke kiri
    if (wrapperBlack.scrollLeft + wrapperBlack.offsetWidth >= wrapperBlack.scrollWidth) {
      scrollDirectionBlack = 'left';
    }
  } else {
    // Jika mencapai batas kiri, ubah arah ke kanan
    if (wrapperBlack.scrollLeft === 0) {
      scrollDirectionBlack = 'right';
    }
  }
}

// Fungsi untuk memulai autoplay
function startAutoplayBlack() {
  autoplayIntervalBlack = setInterval(() => {
    autoScrollBlack();
    handleScrollBoundaryBlack();
  }, autoplaySpeedBlack);
}

// Fungsi untuk menghentikan autoplay
function stopAutoplayBlack() {
  clearInterval(autoplayIntervalBlack);
}

// Memulai autoplay saat halaman dimuat
startAutoplayBlack();

// Menambahkan event listener untuk menghentikan autoplay saat kursor diarahkan ke slider
wrapperBlack.addEventListener('mouseenter', stopAutoplayBlack);

// Menambahkan event listener untuk melanjutkan autoplay saat kursor meninggalkan slider
wrapperBlack.addEventListener('mouseleave', startAutoplayBlack);
