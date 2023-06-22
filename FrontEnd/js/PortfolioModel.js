import { fetchCategories, fetchWorks } from "./api.js";

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
    //filtrage

    workFilter(categoryId){
        if (categoryId === 0) {
            this.filters = this.gallery
        } else {
            this.filters = this.gallery.filter(work => work.categoryId === categoryId);
        }
    }
    //suppression

    //post
}