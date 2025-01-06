const cards = document.querySelectorAll('.card');
const workLink = document.querySelector('.work_link');

workLink.addEventListener('click', function(e){
    e.preventDefault();
    console.log('click')
    for(let card of cards ) {
        card.classList.remove('hidden')
    }
    workLink.classList.add('hidden')
})

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

  const educationBtn = document.querySelector('.education-btn');
  const educationBlock = document.querySelector('.education');

  educationBtn.addEventListener('click', function(){
    educationBlock.classList.toggle('hidden');
    educationBtn.classList.toggle('active');
  })