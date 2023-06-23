// s'occupe d'afficher la page html

export class PortfolioView {

    constructor(model) {
        this.model = model; // fait le lien avec PortfolioModelView permettant d'acceder au constructor
        this.buttons = [] //
        
        this.filtersContainer = document.querySelector('.filters-container');
        this.filterButtons = document.querySelectorAll('.filters-container__btn');
        this.galleryContainer = document.querySelector('.gallery');
        this.modalWorkContainer = document.querySelector('.modal-work-container');
        this.inputCategoriesModal = document.querySelector('.modal-form-info__select');
    }
    //Affiche les boutons filtres
    displayFilterButtons() {
      const buttonsHTML = this.model.buttonsData;
      const button = buttonsHTML.map(btn => `
        <button class="filters-container__btn" id="${btn.id}">${btn.name}</button>
      `).join(''); //renvoie les données de map en chaine de caractères

      this.filtersContainer.innerHTML = `<button class="filters-container__btn filters-container__btn-active" id="0">Tous</button>` + button;
      this.buttons = Array.from(button);
    }

    //Affiche la gallery
    displayWorksGallery() {

      const galleryHTML = this.model.filters.map(work => `
      <figure class="gallery-item" id="${work.id}">
        <img class="gallery-item__img" src="${work.imageUrl}" alt="${work.title}">
        <h3 class="gallery-item__title">${work.title}</h3>
      </figure>
    `).join(''); //renvoie les données de map en chaine de caractères

    this.galleryContainer.innerHTML = galleryHTML;
    }

    //Affiche la galerie dans la modal
    displayModal() {
      
      const modalContentHTML = this.model.filters.map(work => `
        <div class="modal-article">
          <img class="modal-article__img" src="${work.imageUrl}" alt="${work.title}">
          <span class="modal-article__btn" id="${work.id}"><i class="fa-sharp fa-solid fa-trash modal-article__trash-icon"></i></span>
          <p class="modal-article__edit">éditer</p>
        </div>
      `).join('');

      this.modalWorkContainer.innerHTML = modalContentHTML;

      // Ajout categories dans le formulaire depuis api
      const inputCategoriesHTML = this.model.buttonsData.map(cat => `
        <option value="${cat.name}">${cat.name}</option>
      `).join('');
      this.inputCategoriesModal.innerHTML = `<option value=""></option>` + inputCategoriesHTML;
    }

    updateData(){
      this.displayFilterButtons();
      this.displayWorksGallery();
      this.displayModal();
    }

    initListenerMethod() {
      //filtre la galerie au click
      this.filtersContainer.addEventListener('click', e => {
        const categoryId = e.target.id;
        if(categoryId) {
          this.model.worksFilter(categoryId);
          this.updateData();
        }
      })

    }

      
}