const joinUsNow = document.querySelector('#join-us-now');
const map = document.querySelector('#map');
const eventTime = document.querySelector('#event-time');
const menuRow = document.querySelector('#menu-row');
const menuItems = Array.from(document.getElementsByClassName('menu-item'));
const footer = document.querySelector('#footer');

// Fade in and out sections based on scroll position
const vh = window.innerHeight;

window.addEventListener('scroll', () => {
  const joinUsNowLocation = joinUsNow.getBoundingClientRect();
  const mapLocation = map.getBoundingClientRect();
  const eventTimeLocation = eventTime.getBoundingClientRect();
  const menuRowLocation = menuRow.getBoundingClientRect();
  const footerLocation = footer.getBoundingClientRect();

  //   Add fade in animation when bottom of element passes bottom of window viewport (minus a little bit)
  if (joinUsNowLocation.bottom <= vh + vh * 0.15) {
    joinUsNow.classList.add('top-down');
    joinUsNow.classList.remove('opacity-none');
  }

  if (mapLocation.bottom <= vh + vh * 0.15) {
    map.classList.add('fade-in');
    map.classList.remove('opacity-none');
  }

  if (eventTimeLocation.bottom <= vh + vh * 0.1) {
    eventTime.classList.add('right-in');
    eventTime.classList.remove('opacity-none');
  }

  if (menuRowLocation.bottom <= vh + vh * 0.1) {
    menuRow.classList.add('left-in');
    menuRow.classList.remove('opacity-none');
  }

  menuItems.forEach(item => {
    const itemLocation = item.getBoundingClientRect();

    if (itemLocation.bottom <= vh + vh * 0.15) {
      item.classList.add('bottom-up');
      item.classList.remove('opacity-none');
    }
  });

  if (footerLocation.top <= vh) {
    footer.classList.add('bottom-up');
    footer.classList.remove('opacity-none');
  }

  //   Remove fade so it can be applied again!
  if (joinUsNowLocation.top > vh || joinUsNowLocation.bottom <= 0) {
    joinUsNow.classList.remove('top-down');
    joinUsNow.classList.add('opacity-none');
  }

  if (mapLocation.top > vh || mapLocation.bottom <= 0) {
    map.classList.remove('fade-in');
    map.classList.add('opacity-none');
  }

  if (eventTimeLocation.top > vh || eventTimeLocation.bottom <= 0) {
    eventTime.classList.remove('right-in');
    eventTime.classList.add('opacity-none');
  }

  if (menuRowLocation.top > vh || menuRowLocation.bottom <= 0) {
    menuRow.classList.remove('left-in');
    menuRow.classList.add('opacity-none');
  }

  menuItems.forEach(item => {
    const itemLocation = item.getBoundingClientRect();

    if (itemLocation.top > vh || itemLocation.bottom <= 0) {
      item.classList.remove('bottom-up');
      item.classList.add('opacity-none');
    }
  });

  if (footerLocation.top > vh || footerLocation.bottom <= 0) {
    footer.classList.remove('bottom-up');
    footer.classList.add('opacity-none');
  }
});

window.addEventListener('onload', () => {
  const joinUsNowLocation = joinUsNow.getBoundingClientRect();
  const mapLocation = map.getBoundingClientRect();
  const eventTimeLocation = eventTime.getBoundingClientRect();

  if (joinUsNowLocation.bottom >= vh) {
    joinUsNow.classList.add('top-down');
    joinUsNow.classList.remove('opacity-none');
  }

  if (mapLocation.bottom >= vh) {
    map.classList.add('fade-in');
    map.classList.remove('opacity-none');
  }

  if (eventTimeLocation.bottom >= vh) {
    eventTime.classList.add('right-in');
    eventTime.classList.remove('opacity-none');
  }

  menuItems.forEach(item => {
    const itemLocation = item.getBoundingClientRect();

    if (itemLocation.bottom >= vh) {
      item.classList.add('opacity-none');
      item.classList.remove('bottom-up');
    }
  });
});
