// open close modal

export const openModal = () => {

    document.querySelector('.modal').classList.add('active');
    
}

export const closeModal = () => {

    document.querySelector('.modal').classList.remove('active');
    
}

// changer de modal 

export const openSecondModal = () => {

    document.querySelector('.modal-footer__add').addEventListener('click', () => {
        document.querySelector('.first-modal').classList.add('active');
        document.querySelector('.second-modal').classList.add('active');
    });

}

export const backFirstModal = () => {

    document.querySelector('.modal-content__btn-back').addEventListener('click', () => {
        document.querySelector('.first-modal').classList.remove('active');
        document.querySelector('.second-modal').classList.remove('active');
    });

}