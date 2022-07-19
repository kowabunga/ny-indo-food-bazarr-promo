const food = [
  {
    'Bakcang.jpg': {
      description:
        "One of popular food that you can find anywhere in Indonesia, infused with the influence of each area, the food that originally came from China became one of the food that you can't miss.",
      ingredients: 'Sticky rice, pork, mushroom, salted egg, dried shrimp.',
    },
  },
  {
    'bumbu bali telor tahu tempe.jpg': {
      description:
        'Slightly Fried the egg , tofu and tempe and sauteed together with all saucethat already blend. You can add beef too if you want.',
      ingredients:
        'Egg , Tofu , Tempe , Garlic , Shallots , Red chili , Bird chili ,  Tomatoes and Candlenuts.',
    },
  },
  {
    'Dadar gulung.jpg': {
      description:
        'One of Indonesian traditional snack that you usually find it at the tradiional market. Combination of shredded coconut and palm sugar is the one that people like.',
      ingredients: 'Shredded coconut, palm sugar, flour.',
    },
  },
  {
    'Gado Gado.jpeg': {
      description:
        'Indonesian style salad with rice cake and vegetables with peanut sauce dressing',
      ingredients:
        'Rice cake, cabbage, bean sprout, green bean, cucumber, boiled egg, shrimp cracker, peanut sauce.',
    },
  },
  {
    'gethuk lindri.jpg': {
      description:
        'A tradional snack that usually can be found at East and middle java.',
      ingredients: 'Cassava, sugar, shredded coconut',
    },
  },
  {
    'Ketan Bubuk.jpeg': {
      description:
        'An Indonesian savory snack made of steamed glutinous rice sprinkled with roasted soy powder and grated coconut.',
      ingredients: 'Glutinous rice, roasted soy powder, grated coconut',
    },
  },
  {
    'klepon.jpeg': {
      description:
        'A traditional snack from Java made of glutinous rice flour stuffed with palm sugar and coated with shredded coconut.',
      ingredients: 'Glutinous rice flour, palm sugar, shredded coconut.',
    },
  },
  {
    'kupang lontong.jpg': {
      description:
        'Typical food in East Java  especially in Surabaya , Siadoarjo & Pasuruan.',
      ingredients:
        'Rice cakes , Baby Clam , Garlic , Ginger , Lime , Salt , Sugar , Shrimp Paste , Sweet Soy Sauce & Water.',
    },
  },
  {
    'Lemper Ayam.jpeg': {
      description:
        'An Indonesian savory snack made of sticky rice filled with seasoned shredded chicken.',
      ingredients: 'Sticky rice, shredded chicken',
    },
  },
  {
    'Lontong Mi.jpeg': {
      description:
        'A dish with rice cake and noodle with shrimp base soup. The dish has bean sprout, fried tofu and shrimp.',
      ingredients:
        'Rice cake, noodle, bean sprout, fried tofu, fried shrimp, celery, fried shallot, shrimp paste.',
    },
  },
  {
    'Nasi Ayam Kremes.jpeg': {
      description:
        'An Indonesian style crispy chicken that is usually served with white rice',
      ingredients: 'White rice, crispy chicken, cucumber, tomato, chili sauce.',
    },
  },
  {
    'Nasi Ayam Taliwang.jpeg': {
      description:
        'A spicy Indonesian grilled chicken that originated from Lombok island. After the grill process, the chicken will be covered with sweet and spicy sauce.',
      ingredients: 'White rice, ayam taliwang, vegetables',
    },
  },
  {
    'Nasi Campur.jpeg': {
      description:
        'A dish of a scoop of white rice accompanied by small portions of other side dishes. Choice of dishes usually depends on what the food vendors prepare',
      ingredients:
        'White rice, curry chicken, balado egg, beef, sauteed green beans, noodle.',
    },
  },
  {
    'Nasi Urap Urap.jpeg': {
      description:
        'Indonesian salad dish of steamed vegetables mixed with seasoned and spiced grated coconut for dressing. This kind of salad is commonly found in Javanese culinary.',
      ingredients:
        'White rice, steamed vegetables, shredded coconut, corn fritter, chili paste, cracker.',
    },
  },
  {
    'oseng tempe lombok ijo.jpg': {
      description: 'stir fry with green chili',
      ingredients:
        'Tempe / Soybeans , Green chili , shallot , garlic , palm sugar , sweet soy sauce , bay leaves , galangal & salt Sauteed all together but before that you need to fried till brown the tempe first. This dish is healthy and vegetarian dish.',
    },
  },
  {
    'Pastel.jpg': {
      description:
        'One of Indonesian staples pastries, similar shape with empanadas It usually filled with chicken, rice vermicelli, peas, carrot, covered with dough skin and deep fried',
      ingredients: 'Chicken, rice vermicelli, peas, carrot, dried shrimp',
    },
  },
  {
    'rawon.jpg': {
      description:
        'Rawon is a strong rich tasting traditional Indonesian beef black soup. Originally from Surabaya in Indonesian province of East Java. It uses black nuts/ keluak  as the main seasoning which gives the strong nutty flavor and dark color to the soup.',
      ingredients: '',
    },
  },
  {
    'rendang sapi.jpg': {
      description:
        'Rendang is a spicy meat dish which originated in Indonesia, especially the ethnic group of Minangkabau / Padang people. Variations: Chicken rendang, duck rendang, liver rendang, spleen rendang',
      ingredients:
        'Meat (beef, lamb or goat), coconut milk, chilli, ginger, galangal, turmeric, lemongrass, garlic, shallot,',
    },
  },
  {
    'Resoles.jpg': {
      description:
        'An Indonesian style snack with usually filled with chicken ragout, covered with deep fried breadcrumb.',
      ingredients: 'Chicken, mashed potato, peas, carrot, bread crumb.',
    },
  },
  {
    'Rujak Manis.jpeg': {
      description: 'A fruit salad which is served with sweet peanut sauce',
      ingredients: 'fresh fruit, fried tofu, brown sugar, peanut sauce',
    },
  },
  {
    'Rujak Petis Surabaya.jpeg': {
      description:
        'A dish of mixture of steamed vegetables, rice cake and beef tendon, for the texture, covered with mix of shrimp paste and peanut sauce. A delicacy that commonly found in Surabaya.',
      ingredients:
        'Ingr: Rice cake, fried tofu, steamed vegetables, beef tendon, shrimp paste, peanut sauce.',
    },
  },
  {
    'sate kerang.jpg': {
      description:
        'A shellfish satay that is lightly marinated, boiled and lightly grilled and usually served as accompaniion of other dish.',
      ingredients:
        'Inggrediants :  Baby Clam , Red Chili , Garlic , Shallot , Lemongrass , Ginger , Galangal , Turmeric , Tamarind Juice , Limes Leaves , Palm Sugar , Salt , Sweet Soy Sauce & Coriender.',
    },
  },
  {
    'Siomay.jpg': {
      description:
        'An Indonesian ligt meal that you can find anywhere in Indonesia with its own twist in every area. We make the dish with chickenand shrimp and accompanied with sweet and tangy sauce',
      ingredients: 'Chicken, shrimp, shredded carrot',
    },
  },
  {
    'Tahu Campur.jpeg': {
      description:
        'One of popular food from East Java, especially in Surabaya. It’s a beef stew served with green salad, bean sprout, egg noodle, fried tofu, lentho (spiced fried cassava) and crackers',
      ingredients:
        'Vegetables, beansprout, noodle, fried tofu, cassava, crackers, beef.',
    },
  },
  {
    'urap urap.jpg': {
      description:
        'A salad side dish that typically is made to accompanied other main dish. The dish typically is a little bit spicy.',
      ingredients:
        'Cabbage, beansprout, long grean bean, shredded coconut, spices.',
    },
  },
  {
    'Yellow Rish Dish Nasi Kuning.jpeg': {
      description:
        'A dish that usually eaten for special events. The rice looks like a pile of gold, so it is often served at parties and opening ceremonies as the symbol of good fortune, wealth and dignity.',
      ingredients:
        'Yellow rice, fired tempeh, shredded egg, chicken,cucumber, fried shredded coconut.',
    },
  },
  {
    'Yellow Spicy Chicken Soup Soto Ayam.jpeg': {
      description:
        'A soup dish that is popular in Indonesia that a lot of areas have their own version of it. We make this soup in Surabaya style',
      ingredients:
        'White rice, chicken, bean sprout, cabbage, potato, celery, crushed shrimp cracker, chili paste.',
    },
  },
  {
    'Lontong Cap Go Meh.jpeg': {
      description:
        'A dish of fusion of Javanese and Chinese with rice cake as main ingredient and several side dish on the side.',
      ingredients:
        'Rice cake, chicken, beef, egg, bamboo shoot, coconut milk, spices.',
    },
  },
  {
    'Madura Porridge': {
      description:
        'Traditional snack consistt of glutinous black rice, rice flour congee, tapioca pearl, sweet ball glutinous flour served with coconut milk and brown sugar.',
      ingredients:
        'Ingr: Rice flour, tapioca pearl, glutinous rice flour, glutinous black rice, coconut milk, pandan leaf, brown sugar.',
    },
  },
  {
    'lontong sayur.jpg': {
      description:
        'The name “sayur” that is mean vegetables explain the dish itself, it is a vegetarian stew dish that is best served with rice cake and some spicy chilli for people who like it spicy.',
      ingredients:
        'Rice cake, chayote, long green bean, tempeh tofu, bamboo shoot, coconut milk, spices.',
    },
  },
];

const gallery = document.createDocumentFragment();

food.forEach(item => {
    const div = document.createElement('div');
    div.classList.add(
      'card',
      'card-size',
      'm-3',
      'p-0',
      'menu-item',
      'opacity-none',
      'shadow-sm-blue'
    );
    const img = document.createElement('img');
    img.src = `./dist/images/food-images/${dish}`;
    img.classList.add('d-block', 'w-100');
    img.alt = `Image of a plate of ${item.key}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = item
});
