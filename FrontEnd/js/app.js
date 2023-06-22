import { PortfolioModel } from "./PortfolioModel.js";
import { PortfolioView } from "./PortfolioView.js";

import { filterButtonsStyle } from "./functions/filtersButtonsStyle.js";
import { adminMode } from "./functions/admin.js";

const portfolioModel = new PortfolioModel();
const portfolioViewView = new PortfolioView(portfolioModel);


const init = async () => {

    try {

        await portfolioModel.fetchCategories();
        portfolioViewView.displayFilterButtons();
        
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
    };

    try {

        await portfolioModel.fetchWorks();
        portfolioViewView.displayWorksGallery();

    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
    };

    // appel function pour styliser les boutons filtres
    const filterButtons = document.querySelectorAll('.filters-container__btn');
    filterButtons.forEach(button => filterButtonsStyle(button))

    // Session admin lorsqu'on est connecté
    adminMode();
}

init();
