const modal = document.querySelector('.modal');
const openSpan = document.querySelector('.portfolio-header__span');
const btnBack = document.querySelector('.modal-content__btn-back');
const validationBtn = document.querySelector('.modal-footer__add');
const footerDiv = document.querySelector('.modal-footer');
const removeAll = document.querySelector('.modal-footer__remove-all');
const trigger = document.querySelectorAll('.trigger');

// LISTENERS
//ouvre modal au click
openSpan.addEventListener('click', openModal);
//ferme modal au click
trigger.forEach(el => el.addEventListener('click', closeModal));

btnBack.addEventListener('click', () => {
    modalArticleContainer.innerHTML = "";
    modalArticleContainer.classList.remove('active');
    getModalWorks(results);
});
document.querySelector('.modal-footer__add').addEventListener('click', modalAddPhoto);


