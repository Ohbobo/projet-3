export class PortfolioViewModel {
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async init() {
        try {
            await this.model.fetchCategories();
            await this.model.fetchWorks();

            this.view.updateData();
    
            /*this.view.displayFilterButtons()
            this.view.displayWorksGallery();
            this.view.displayModal();*/
        } catch (error) {
            console.error('Erreur lors de la récupération des données', error);
        }
    }
    
    //filtre
    worksFilterElement(categoryId) {
        this.model.worksFilter(categoryId);
        this.view.updateData();
    }

    //suppression
    async deleteWorkElement(id) {
        await this.modal.deleteWorks(id);
        this.view.updateData();
    }

    //post
    async addWorkElement(work) {
        await this.modal.addWorks(work);
        this.view.updateData();
    }
}