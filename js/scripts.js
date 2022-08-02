// Custom Scripts
// Custom scripts

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

});
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none'
      });
      tab.forEach(item => {
          item.classList.remove(activeClass)
      });
  }
  function showTabContent(i = 0) {
     content[i].style.display = display
     tab[i].classList.add(activeClass)
  }
  hideTabContent()
  showTabContent()
  header.addEventListener('click', e => {
      const target = e.target
      if (target.classList.contains(tabSelector.replace(/\./, '')) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
          tab.forEach((item, i) => {
              if ( target == item || target.parentNode == item ) {
                  hideTabContent()
                  showTabContent(i)
              }
          });
      }
  })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.product__filter-btn' ,'.product__btn', '.tabs__content-item', 'product__btn--active')

