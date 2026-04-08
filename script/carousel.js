const track = document.querySelector('.carousel-track');
const cards = Array.from(document.querySelectorAll('.card'));
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function centercard(index){
    const card = cards[index];
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const offset = cardRect.left - trackRect.left;
    const scroll = offset - (trackRect.width/2 - cardRect.width/2);

    track.scrollBy({left: scroll, behavior: 'smooth'});

    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1){
        currentIndex++;
        centercard(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if(currentIndex > 0){
        currentIndex--;
        centercard(currentIndex);
    }
});

let scrollTimeout;

track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft <= 5 || track.scrollLeft >= maxScrollLeft - 5){
            return;
        }
        let closestIndex = 0;
        let closestDistance = Infinity;
        const trackCenter = track.scrollLeft + track.offsetWidth / 2;
        cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.offsetWidth /2
            const distance = Math.abs(trackCenter - cardCenter);
            if(distance < closestDistance){
                closestDistance = distance;
                closestIndex = i;
            }
        });
    cards.forEach(c => c.classList.remove('active'));
    cards[currentIndex].classList.add('active');
}, 100);
});

window.addEventListener('load', () => {
    centercard(0);
});