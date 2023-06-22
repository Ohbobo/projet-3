// gestion changement style bouton au click

export const filterButtonsStyle = (filter) => {

        filter.addEventListener('click', () => {
    
            document.querySelector('.filters-container__btn-active')?.classList.remove('filters-container__btn-active');
            filter.classList.add('filters-container__btn-active');
        });
}