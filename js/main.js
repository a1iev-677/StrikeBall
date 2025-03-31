const burgerBtn = document.querySelector('.header-burger');
const burgerCloseBtn = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.burger-menu');

const catalogBtn = document.querySelector('.catalog-btn')
const catalogCloseBtn = document.querySelector('.catalog-menu__close');
const catalogMenu = document.querySelector('.catalog-menu');

const cardCounterMinus = document.querySelector('.card__counter-minus');
const cardCounterPlus = document.querySelector('.card__counter-plus');
const cardCounterCountText = document.querySelector('.card__counter-count');

const navBarButtons = document.querySelectorAll(".tab-btn");
const navBarPanels = document.querySelectorAll(".tab-panel");

navBarButtons.forEach(button => {
  button.addEventListener("click", () => {
    navBarButtons.forEach(btn => btn.classList.remove("active"));
    navBarPanels.forEach(panel => panel.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

function burgerShow() {
  burgerMenu.classList.toggle('none');
}

function catalogShow() {
  catalogMenu.classList.toggle('none');
}

let cardCounterCount = 1;

cardCounterPlus.addEventListener('click', () => {
  cardCounterCount += 1;
  cardCounterCountText.textContent = cardCounterCount;
});

cardCounterMinus.addEventListener('click', () => {
  if (cardCounterCount > 1) {
    cardCounterCount--;
    cardCounterCountText.textContent = cardCounterCount;
  }
});

document.querySelectorAll('.accordion-header').forEach(item => {
  item.addEventListener('click', function () {
      let parent = this.parentNode;
      parent.classList.toggle('active');
  });
});
