const carousel = document.querySelector('.carousel-inner');
const foodImageFileNames = [
  'bakcang.jpg',
  'bumbu bali telor tahu tempe.jpg',
  'dadar gulung.jpg',
  'gado gado.jpeg',
  'gethuk lindri.jpg',
  'ketan bubuk.jpeg',
  'klepon.jpeg',
  'kupang lontong.jpg',
  'lemper ayam.jpeg',
  'lontong mi.jpeg',
  'nasi ayam kremes.jpeg',
  'nasi ayam taliwang.jpeg',
  'nasi campur.jpeg',
  'nasi urap urap.jpeg',
  'oseng tempe lombok ijo.jpg',
  'pastel.jpg',
  'rawon.jpg',
  'rendang sapi.jpg',
  'resoles.jpg',
  'rujak manis.jpeg',
  'rujak petis surabaya.jpeg',
  'sate lerang.jpg',
  'siomay.jpg',
  'tahu campur.jpeg',
  'urap urap.jpg',
  'yellow rish dish nasi kuning.jpeg',
  'yellow spicy chicken soup soto ayam.jpeg',
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
  'yellow rish dish nasi kuning',
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

console.log(carouselImages);

carousel.append(carouselImages);
