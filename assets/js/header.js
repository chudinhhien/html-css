function loadHeader() {
  fetch('../../src/layouts/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

      addMenuHoverEvents();
    });
}

window.onload = loadHeader;

function addMenuHoverEvents() {
  const menuItems = document.querySelectorAll('.menu--item:not(.menu--item-active)');

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('menu--item-active');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('menu--item-active');
    });
  });
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

