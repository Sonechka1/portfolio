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