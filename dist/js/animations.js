const joinUsNow = document.querySelector('#join-us-now');
const whyUsCards = Array.from(document.querySelectorAll('.why-us-card'));
const map = document.querySelector('#map');
const eventTime = document.querySelector('#event-time');
const galleryRow = document.querySelector('#gallery-row');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
let galleryItems = [];
const footer = document.querySelector('#footer');

// Fade in and out sections based on scroll position
const vh = window.innerHeight;

// Gallery item animation delay
let galleryDelay = 150;

window.addEventListener('scroll', () => {
  if (galleryItems.length === 0) {
    galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  }

  const joinUsNowLocation = joinUsNow.getBoundingClientRect();
  const mapLocation = map.getBoundingClientRect();
  const eventTimeLocation = eventTime.getBoundingClientRect();
  const menuRowLocation = galleryRow.getBoundingClientRect();
  const footerLocation = footer.getBoundingClientRect();

  //   Add fade in animation when bottom of element passes bottom of window viewport (minus a little bit)
  if (joinUsNowLocation.top <= vh) {
    joinUsNow.classList.add('fade-in');
    joinUsNow.classList.remove('opacity-none');
  }

  if (mapLocation.top <= vh) {
    map.classList.add('fade-in');
    map.classList.remove('opacity-none');
  }

  if (eventTimeLocation.top <= vh) {
    eventTime.classList.add('fade-in');
    eventTime.classList.remove('opacity-none');
  }

  if (menuRowLocation.top <= vh) {
    galleryRow.classList.add('fade-in');
    galleryRow.classList.remove('opacity-none');
  }

  menuItems.forEach(item => {
    const itemLocation = item.getBoundingClientRect();

    if (itemLocation.top <= vh) {
      item.classList.add('fade-in');
      item.classList.remove('opacity-none');
    }
  });

  whyUsCards.forEach((card, idx) => {
    const cardLocation = card.getBoundingClientRect();

    if (cardLocation.bottom >= vh || cardLocation.top <= vh) {
      if (idx === 0) {
        card.classList.add('fade-in');
        card.classList.remove('opacity-none');
      }
      if (idx === 1) {
        setTimeout(
          () => {
            card.classList.add('fade-in');
            card.classList.remove('opacity-none');
          },
          250,
          card
        );
      }

      if (idx === 2) {
        setTimeout(
          () => {
            card.classList.add('fade-in');
            card.classList.remove('opacity-none');
          },
          500,
          card
        );
      }
    }
  });

  galleryItems.forEach(item => {
    const itemLocation = item.getBoundingClientRect();

    if (itemLocation.top <= vh) {
      addAnimationDelay(item, galleryDelay, 'fade-in');
      galleryDelay += 150;
      if (galleryDelay >= 750) galleryDelay = 150;
    }
  });

  if (footerLocation.top <= vh) {
    footer.classList.add('fade-in');
    footer.classList.remove('opacity-none');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  whyUsCards.forEach((card, idx) => {
    const cardLocation = card.getBoundingClientRect();

    if (cardLocation.bottom >= vh || cardLocation.top <= vh) {
      if (idx === 0) {
        addAnimationDelay(card, 250, 'fade-in');
      }
      if (idx === 1) {
        addAnimationDelay(card, 500, 'fade-in');
      }

      if (idx === 2) {
        addAnimationDelay(card, 750, 'fade-in');
      }
    }
  });
});

window.addEventListener('onload', () => {
  const joinUsNowLocation = joinUsNow.getBoundingClientRect();
  const mapLocation = map.getBoundingClientRect();
  const eventTimeLocation = eventTime.getBoundingClientRect();

  if (galleryItems.length === 0) {
    galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  }

  if (itemLocation.top <= vh) {
    addAnimationDelay(item, galleryDelay, 'fade-in');
    galleryDelay += 150;
    if (galleryDelay >= 750) galleryDelay = 150;
  }

  if (joinUsNowLocation.bottom >= vh) {
    joinUsNow.classList.add('fade-in');
    joinUsNow.classList.remove('opacity-none');
  }

  if (mapLocation.bottom >= vh) {
    map.classList.add('fade-in');
    map.classList.remove('opacity-none');
  }

  if (eventTimeLocation.bottom >= vh) {
    eventTime.classList.add('fade-in');
    eventTime.classList.remove('opacity-none');
  }
});

function addAnimationDelay(element, delay, animation) {
  setTimeout(
    () => {
      element.classList.add(animation);
      element.classList.remove('opacity-none');
    },
    delay,
    element
  );
}
