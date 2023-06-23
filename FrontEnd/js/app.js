import { PortfolioModel } from "./PortfolioModel.js";
import { PortfolioView } from "./PortfolioView.js";

import { filterButtonsStyle } from "./functions/filtersButtonsStyle.js";
import { adminMode } from "./functions/admin.js";

import { openModal, closeModal, openSecondModal, backFirstModal} from "./functions/openCloseModal.js";

const model = new PortfolioModel();
const view = new PortfolioView(model);

const app = async () => {
    
    try {
        await model.fetchCategories();
        await model.fetchWorks();

        view.initListenerMethod();
        view.updateData();
    } catch (error) {
        console.error(error);
    }

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
    }));

    // Session admin lorsqu'on est connecté
    adminMode();

    //ouvrir la modal ajout photo + retour modal galerie au click
    openSecondModal();
    backFirstModal();
}

app();
