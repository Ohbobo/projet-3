import { fetchCategories, fetchWorks, deleteWorks } from "./api.js";

export class PortfolioModel {
    constructor() {
        this.buttonsData = [];
        this.galleryData = [];
        this.modalGalleryData= [];
        this.filters = [];
    }

    // filters
    async fetchCategories() {
        try {
            this.buttonsData = await fetchCategories();
        } catch (error) {
            console.error("Erreur lors de la récupération des données", error);
        }
    }

    // works
    async fetchWorks() {
        try {
            this.gallery = await fetchWorks();
            this.filters = this.gallery;
        } catch (error) {
            console.error("Erreur lors de la récupération des données", error);
        }
    }
    //filtrage des works

    worksFilter(categoryId){
        if (categoryId === 0) {
            this.filters = this.gallery
        } else {
            this.filters = this.gallery.filter(work => work.categoryId === categoryId);
        }
    }
    //suppression
    async deleteWorks(id) {
        try {
            await deleteWorks(id);
            this.galleryData = this.galleryData.filter(item => item.id !== item.id);
            this.filters = this.filters.filter(item => item.id !== item.id);
        } catch (error) {
            console.error("Une erreur s'est produite lors de la suppression:", error);
        }
    }
    //post
    async addWorks(work) {
        
    }


}