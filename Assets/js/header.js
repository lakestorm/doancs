





const back_color_menu = document.querySelector('.menu');
const slider = document.getElementById('slider');

window.addEventListener('scroll', function () {
  const sliderRect = slider.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (sliderRect.bottom <= windowHeight && scrollPosition >= sliderRect.top) {
    down();
  } else {
    up();
  }
});

function down() {
  back_color_menu.classList.add('menu-scroll-down');

}
function up() {
  back_color_menu.classList.remove('menu-scroll-down');

}



const btn = document.querySelector('.menu-btn');
var close = document.querySelector('.exit-nav-menu')
var add = document.querySelector('.add')

btn.addEventListener('click',
  function (event) {
    add.classList.remove('hidden-menu');
  })
close.addEventListener('click',
  function (event) {
    add.classList.add('hidden-menu');
  })