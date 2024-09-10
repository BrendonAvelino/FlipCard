document.addEventListener('DOMContentLoaded', () => {
    const cardInner = document.querySelector('.card-inner');
    
    cardInner.addEventListener('click', () => {
        cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
});
