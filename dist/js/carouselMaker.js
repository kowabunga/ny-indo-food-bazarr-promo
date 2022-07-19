const carousel = document.querySelector('.carousel-inner');
const foodImageFileNames = [
  'Bakcang.jpg',
  'bumbu bali telor tahu tempe.jpg',
  'Dadar gulung.jpg',
  'Gado Gado.jpeg',
  'gethuk lindri.jpg',
  'Ketan Bubuk.jpeg',
  'klepon.jpeg',
  'kupang lontong.jpg',
  'Lemper Ayam.jpeg',
  'Lontong Mi.jpeg',
  'Nasi Ayam Kremes.jpeg',
  'Nasi Ayam Taliwang.jpeg',
  'Nasi Campur.jpeg',
  'Nasi Urap Urap.jpeg',
  'oseng tempe lombok ijo.jpg',
  'Pastel.jpg',
  'rawon.jpg',
  'rendang sapi.jpg',
  'Resoles.jpg',
  'Rujak Manis.jpeg',
  'Rujak Petis Surabaya.jpeg',
  'sate lerang.jpg',
  'Siomay.jpg',
  'Tahu Campur.jpeg',
  'urap urap.jpg',
  'Yellow Rish Dish Nasi Kuning.jpeg',
  'Yellow Spicy Chicken Soup Soto Ayam.jpeg',
  'Lontong Cap Go Meh.jpeg',
];

const foodImageNames = [
  'bakcang',
  'bumbu bali telor tahu tempe',
  'dadar gulung',
  'gado gado',
  'gethuk lindri',
  'ketan bubuk',
  'klepon',
  'kupang lontong',
  'lemper ayam',
  'lontong mi',
  'nasi ayam kremes',
  'nasi ayam taliwang',
  'nasi campur',
  'nasi urap urap',
  'oseng tempe lombok ijo',
  'pastel',
  'rawon',
  'rendang sapi',
  'resoles',
  'rujak manis',
  'rujak petis surabaya',
  'sate lerang',
  'siomay',
  'tahu campur',
  'urap urap',
  'yellow rice dish nasi kuning',
  'yellow spicy chicken soup soto ayam',
];

const carouselImages = document.createDocumentFragment();

foodImageFileNames.map((dish, idx) => {
  const div = document.createElement('div');
  idx === 0
    ? div.classList.add('carousel-item', 'active', 'carousel-image-height')
    : div.classList.add('carousel-item', 'carousel-image-height');
  div.setAttribute('data-bs-interval', '2500');

  const img = document.createElement('img');
  img.src = `./dist/images/food-images/${dish}`;
  img.classList.add('d-block', 'w-100');
  img.alt = `Image of a plate of ${foodImageNames[idx]}`;

  div.append(img);
  carouselImages.append(div);
});

carousel.append(carouselImages);
