import { PortfolioModel } from "./PortfolioModel.js";
import { PortfolioView } from "./PortfolioView.js";

import { filterButtonsStyle } from "./functions/filtersButtonsStyle.js";
import { adminMode } from "./functions/admin.js";

import { openModal, closeModal, openSecondModal, backFirstModal} from "./functions/openCloseModal.js";

const portfolioModel = new PortfolioModel();
const portfolioView = new PortfolioView(portfolioModel);


const init = async () => {

    try {
        await portfolioModel.fetchCategories();
        portfolioView.displayFilterButtons();
        
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
    };

    try {
        await portfolioModel.fetchWorks();
        portfolioView.displayWorksGallery();
        portfolioView.displayModal();

    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
    };
    
    // appel function pour styliser les boutons filtres
    const filterButtons = document.querySelectorAll('.filters-container__btn');
    filterButtons.forEach(button => filterButtonsStyle(button))

    //appel function pour ouvrir et fermer la modal au click
    document.querySelectorAll('.trigger').forEach(el => 
        el.addEventListener('click', () => {
            openModal();
        }));
    document.querySelectorAll('.close').forEach(el => 
        el.addEventListener('click', () => {
            document.querySelector('.first-modal').classList.remove('active');
            document.querySelector('.second-modal').classList.remove('active');
            closeModal();
    }))

    // Session admin lorsqu'on est connecté
    adminMode();

    //ouvrir la modal ajout photo + retour modal galerie au click
    openSecondModal();
    backFirstModal();
}

init();
