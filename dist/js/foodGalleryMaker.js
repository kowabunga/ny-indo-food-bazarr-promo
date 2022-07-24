const gallerySection = document.querySelector('#gallery');
const showMoreButton = document.querySelector('#show-more-gallery');
const food = [
  {
    description:
      "One of popular food that you can find anywhere in Indonesia, infused with the influence of each area, the food that originally came from China became one of the food that you can't miss.",
    ingredients: 'Sticky rice, pork, mushroom, salted egg, dried shrimp.',
    itemUrl: 'Bakcang.jpg',
    itemName: 'Bakcang',
    itemEnglishName: 'Sticky Rice Dumpling',
  },
  {
    description:
      'Slightly Fried the egg , tofu and tempe and sauteed together with all saucethat already blend. You can add beef too if you want.',
    ingredients:
      'Egg , Tofu , Tempe , Garlic , Shallots , Red chili , Bird chili ,  Tomatoes and Candlenuts.',
    itemUrl: 'bumbu bali telor tahu tempe.jpg',
    itemName: 'bumbu bali telor tahu tempe',
  },
  {
    description:
      'One of Indonesian traditional snack that you usually find it at the tradiional market. Combination of shredded coconut and palm sugar is the one that people like.',
    ingredients: 'Shredded coconut, palm sugar, flour.',
    itemUrl: 'Dadar gulung.jpg',
    itemName: 'Dadar gulung',
  },
  {
    description:
      'Indonesian style salad with rice cake and vegetables with peanut sauce dressing',
    ingredients:
      'Rice cake, cabbage, bean sprout, green bean, cucumber, boiled egg, shrimp cracker, peanut sauce.',
    itemUrl: 'Gado Gado.jpeg',
    itemName: 'Gado Gado',
    itemEnglishName: 'Indonesian Salad with Peanut Sauce',
  },
  {
    description:
      'A tradional snack that usually can be found at East and middle java.',
    ingredients: 'Cassava, sugar, shredded coconut',
    itemUrl: 'gethuk lindri.jpg',
    itemName: 'gethuk lindri',
  },
  {
    description:
      'An Indonesian savory snack made of steamed glutinous rice sprinkled with roasted soy powder and grated coconut.',
    ingredients: 'Glutinous rice, roasted soy powder, grated coconut',
    itemUrl: 'Ketan Bubuk.jpeg',
    itemName: 'Ketan Bubuk',
  },
  {
    description:
      'A traditional snack from Java made of glutinous rice flour stuffed with palm sugar and coated with shredded coconut.',
    ingredients: 'Glutinous rice flour, palm sugar, shredded coconut.',
    itemUrl: 'Klepon.jpeg',
    itemName: 'klepon',
    itemEnglishName: 'Rice Flour Ball stuffed with Palm Sugar',
  },
  {
    description:
      'Typical food in East Java  especially in Surabaya , Siadoarjo & Pasuruan.',
    ingredients:
      'Rice cakes , Baby Clam , Garlic , Ginger , Lime , Salt , Sugar , Shrimp Paste , Sweet Soy Sauce & Water.',
    itemUrl: 'kupang lontong.jpg',
    itemName: 'kupang lontong',
  },
  {
    description:
      'An Indonesian savory snack made of sticky rice filled with seasoned shredded chicken.',
    ingredients: 'Sticky rice, shredded chicken',
    itemUrl: 'Lemper Ayam.jpeg',
    itemName: 'Lemper Ayam',
    itemEnglishName: 'Sticky Rice with Shredded Chicken',
  },
  {
    description:
      'A dish with rice cake and noodle with shrimp base soup. The dish has bean sprout, fried tofu and shrimp.',
    ingredients:
      'Rice cake, noodle, bean sprout, fried tofu, fried shrimp, celery, fried shallot, shrimp paste.',
    itemUrl: 'Lontong Mi.jpeg',
    itemName: 'Lontong Mi',
  },
  {
    description:
      'An Indonesian style crispy chicken that is usually served with white rice',
    ingredients: 'White rice, crispy chicken, cucumber, tomato, chili sauce.',
    itemUrl: 'Nasi Ayam Kremes.jpeg',
    itemName: 'Nasi Ayam Kremes',
    itemEnglishName: 'Indonesian Crispy Chicken with Rice',
  },
  {
    description:
      'A spicy Indonesian grilled chicken that originated from Lombok island. After the grill process, the chicken will be covered with sweet and spicy sauce.',
    ingredients: 'White rice, ayam taliwang, vegetables',
    itemUrl: 'Nasi Ayam Taliwang.jpeg',
    itemName: 'Nasi Ayam Taliwang',
  },
  {
    description:
      'A dish of a scoop of white rice accompanied by small portions of other side dishes. Choice of dishes usually depends on what the food vendors prepare',
    ingredients:
      'White rice, curry chicken, balado egg, beef, sauteed green beans, noodle.',
    itemUrl: 'Nasi Campur.jpeg',
    itemName: 'Nasi Campur',
  },
  {
    description:
      'Indonesian salad dish of steamed vegetables mixed with seasoned and spiced grated coconut for dressing. This kind of salad is commonly found in Javanese culinary.',
    ingredients:
      'White rice, steamed vegetables, shredded coconut, corn fritter, chili paste, cracker.',
    itemUrl: 'Nasi Urap Urap.jpeg',
    itemName: 'Nasi Urap Urap',
    itemEnglishName: 'Javanese Style Salad',
  },
  {
    description: 'stir fry with green chili',
    ingredients:
      'Tempe / Soybeans , Green chili , shallot , garlic , palm sugar , sweet soy sauce , bay leaves , galangal & salt Sauteed all together but before that you need to fried till brown the tempe first. This dish is healthy and vegetarian dish.',
    itemUrl: 'oseng tempe lombok ijo.jpg',
    itemName: 'oseng tempe lombok ijo',
    itemEnglishName: 'Stir Fry Tempeh with Green Chili',
  },
  {
    description:
      'One of Indonesian staples pastries, similar shape with empanadas It usually filled with chicken, rice vermicelli, peas, carrot, covered with dough skin and deep fried',
    ingredients: 'Chicken, rice vermicelli, peas, carrot, dried shrimp',
    itemUrl: 'Pastel.jpg',
    itemName: 'Pastel',
    itemEnglishName: 'Indonesian style Empanadas',
  },
  {
    description:
      'Rawon is a strong rich tasting traditional Indonesian beef black soup. Originally from Surabaya in Indonesian province of East Java. It uses black nuts/ keluak  as the main seasoning which gives the strong nutty flavor and dark color to the soup.',
    ingredients: '',
    itemUrl: 'rawon.jpg',
    itemName: 'rawon',
    itemEnglishName: 'Beef Stew with Black Soup',
  },
  {
    description:
      'Rendang is a spicy meat dish which originated in Indonesia, especially the ethnic group of Minangkabau / Padang people. Variations: Chicken rendang, duck rendang, liver rendang, spleen rendang',
    ingredients:
      'Meat (beef, lamb or goat), coconut milk, chilli, ginger, galangal, turmeric, lemongrass, garlic, shallot,',
    itemUrl: 'rendang sapi.jpg',
    itemName: 'rendang sapi',
    itemEnglishName: 'Beef Rendang',
  },
  {
    description:
      'An Indonesian style snack with usually filled with chicken ragout, covered with deep fried breadcrumb.',
    ingredients: 'Chicken, mashed potato, peas, carrot, bread crumb.',
    itemUrl: 'Resoles.jpg',
    itemName: 'Resoles',
  },
  {
    description: 'A fruit salad which is served with sweet peanut sauce',
    ingredients: 'fresh fruit, fried tofu, brown sugar, peanut sauce',
    itemUrl: 'Rujak Manis.jpeg',
    itemName: 'Rujak Manis',
    itemEnglishName: 'Fruit Salad with Sweet Peanut Sauce',
  },
  {
    description:
      'A dish of mixture of steamed vegetables, rice cake and beef tendon, for the texture, covered with mix of shrimp paste and peanut sauce. A delicacy that commonly found in Surabaya.',
    ingredients:
      'Ingr: Rice cake, fried tofu, steamed vegetables, beef tendon, shrimp paste, peanut sauce.',
    itemUrl: 'Rujak Petis Surabaya.jpeg',
    itemName: 'Rujak Petis Surabaya',
    itemEnglishName: 'Mixed Vegetables Salad',
  },
  {
    description:
      'A shellfish satay that is lightly marinated, boiled and lightly grilled and usually served as accompaniion of other dish.',
    ingredients:
      'Inggrediants :  Baby Clam , Red Chili , Garlic , Shallot , Lemongrass , Ginger , Galangal , Turmeric , Tamarind Juice , Limes Leaves , Palm Sugar , Salt , Sweet Soy Sauce & Coriender.',
    itemUrl: 'sate kerang.jpg',
    itemName: 'sate kerang',
    itemEnglishName: 'Baby Clam Skewer',
  },
  {
    description:
      'An Indonesian ligt meal that you can find anywhere in Indonesia with its own twist in every area. We make the dish with chickenand shrimp and accompanied with sweet and tangy sauce',
    ingredients: 'Chicken, shrimp, shredded carrot',
    itemUrl: 'Siomay.jpg',
    itemName: 'Siomay',
  },
  {
    description:
      'One of popular food from East Java, especially in Surabaya. It’s a beef stew served with green salad, bean sprout, egg noodle, fried tofu, lentho (spiced fried cassava) and crackers',
    ingredients:
      'Vegetables, beansprout, noodle, fried tofu, cassava, crackers, beef.',
    itemUrl: 'Tahu Campur.jpeg',
    itemName: 'Tahu Campur',
  },
  {
    description:
      'A salad side dish that typically is made to accompanied other main dish. The dish typically is a little bit spicy.',
    ingredients:
      'Cabbage, beansprout, long grean bean, shredded coconut, spices.',
    itemUrl: 'urap urap.jpg',
    itemName: 'urap urap',
  },
  {
    description:
      'A dish that usually eaten for special events. The rice looks like a pile of gold, so it is often served at parties and opening ceremonies as the symbol of good fortune, wealth and dignity.',
    ingredients:
      'Yellow rice, fired tempeh, shredded egg, chicken,cucumber, fried shredded coconut.',
    itemUrl: 'Yellow Rish Dish Nasi Kuning.jpeg',
    itemName: 'Yellow Rish Dish Nasi Kuning',
    itemEnglishName: 'Yellow Rice Dish',
  },
  {
    description:
      'A soup dish that is popular in Indonesia that a lot of areas have their own version of it. We make this soup in Surabaya style',
    ingredients:
      'White rice, chicken, bean sprout, cabbage, potato, celery, crushed shrimp cracker, chili paste.',
    itemUrl: 'Yellow Spicy Chicken Soup Soto Ayam.jpeg',
    itemName: 'Soto Ayam',
    itemEnglishName: 'Yellow Spicy Chicken Soup',
  },
  {
    description:
      'A dish of fusion of Javanese and Chinese with rice cake as main ingredient and several side dish on the side.',
    ingredients:
      'Rice cake, chicken, beef, egg, bamboo shoot, coconut milk, spices.',
    itemUrl: 'Lontong Cap Go Meh.jpeg',
    itemName: 'Lontong Cap Go Meh',
    itemEnglishName: 'Rice Cake Noodle Soup',
  },
  {
    description:
      'Traditional snack consistt of glutinous black rice, rice flour congee, tapioca pearl, sweet ball glutinous flour served with coconut milk and brown sugar.',
    ingredients:
      'Ingr: Rice flour, tapioca pearl, glutinous rice flour, glutinous black rice, coconut milk, pandan leaf, brown sugar.',
    itemUrl: 'Bubur madura.jpg',
    itemName: 'Bubur Madura',
    itemEnglishName: 'Madura Porridge',
  },
  {
    description:
      'The name “sayur” that is mean vegetables explain the dish itself, it is a vegetarian stew dish that is best served with rice cake and some spicy chilli for people who like it spicy.',
    ingredients:
      'Rice cake, chayote, long green bean, tempeh tofu, bamboo shoot, coconut milk, spices.',
    itemUrl: 'lontong sayur.jpg',
    itemName: 'lontong sayur',
  },
  {
    description:
      'A spicy Indonesian grilled chicken that originated from Lombok island. After the grill process, the chicken will be covered with sweet and spicy sauce.',
    ingredients: 'White rice, ayam taliwang, vegetables',
    itemUrl: 'Nasi Ayam Taliwang.jpeg',
    itemName: 'Nasi Ayam Taliw',
    itemEnglishName: 'Spicy Grilled Chicken with Rice',
  },
];

showMoreButton.addEventListener('click', function () {
  makeGallery();
});

const gallery = document.createDocumentFragment();
let start = 0,
  end = 6;

// On button press, call function
function makeGallery() {
  // Check current gallery delay. If greater than 750ms, return to 150ms (prevents animation from being *really* long at the end of it all)
  if (galleryDelay >= 750) galleryDelay = 150;

  for (let i = start; i < end; i++) {
    const item = food[i];
    const card = document.createElement('div');
    card.classList.add(
      'card',
      'gallery-card-size',
      'm-3',
      'p-0',
      'menu-item',
      'shadow-sm-light',
      'opacity-none',
      'gallery-item',
      'bg-off-white'
    );
    const img = document.createElement('img');

    img.src = `./dist/images/food-images/${item.itemUrl}`;
    img.classList.add('card-img-top', 'img-fluid', 'gallery-card-image-height');
    img.alt = `Image of a plate of ${item.itemName}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const h3 = document.createElement('h3');
    h3.classList.add('card-title', 'text-capitalize');
    h3.textContent = item.itemName;

    const h4 = document.createElement('h4');
    if (item.itemEnglishName) {
      h4.classList.add('card-subtitle', 'text-muted', 'lead');
      h4.textContent = item.itemEnglishName;
    }

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.textContent = item.description;

    cardBody.append(h3);
    item.itemEnglishName && cardBody.append(h4);

    cardBody.append(document.createElement('hr'));
    cardBody.append(cardText);
    card.append(img);
    card.append(cardBody);

    gallery.append(card);
  }

  gallerySection.append(gallery);

  start += 6;
  end += 6;

  galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  for (let i = end; i <= galleryItems.length; i++) {
    const item = galleryItems[i];
    const itemLocation = item.getBoundingClientRect();

    if (itemLocation.bottom >= vh || itemLocation.top <= vh) {
      addAnimationDelay(item, galleryDelay, 'fade-in');
      galleryDelay += 150;
    }
  }

  if (end >= food.length) {
    showMoreButton.classList.add('disabled', 'opacity-none');
  }
}

// Call initially
makeGallery();
