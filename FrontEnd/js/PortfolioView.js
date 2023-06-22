
export class PortfolioView {

    constructor(model) {
        this.model = model; // fait le lien avec PortfolioModel permettant d'acceder au constructor
        this.filtersContainer = document.querySelector('.filters-container');
        this.galleryContainer = document.querySelector('.gallery');
        this.modalWorkContainer = document.querySelector('.modal-work-container');
        this.buttons = [] //
        this.filtersContainer.addEventListener('click', this.handleFilterButtonClick.bind(this));
    }

    displayFilterButtons() {
      const buttonsHTML = this.model.buttonsData;
      const button = buttonsHTML.map(btn => `
        <button class="filters-container__btn" id="${btn.id}">${btn.name}</button>
      `).join(''); //renvoie les données de map en chaine de caractères

      this.filtersContainer.innerHTML = `<button class="filters-container__btn filters-container__btn-active" id="0">Tous</button>` + button;
      this.buttons = Array.from(button);
    }

    displayWorksGallery() {

      const galleryHTML = this.model.filters.map(work => `
      <figure class="gallery-item" id="${work.id}">
        <img class="gallery-item__img" src="${work.imageUrl}" alt="${work.title}">
        <p class="gallery-item__title">${work.title}</p>
      </figure>
    `).join(''); //renvoie les données de map en chaine de caractères

    this.galleryContainer.innerHTML = galleryHTML;
    }

    displayModal() {

      const modalContentHTML = this.model.filters.map(work => `
        <div class="modal-article">
          <img class="modal-article__img" src="${work.imageUrl}" alt="${work.title}">
          <span class="modal-article__btn" id="${work.id}"><i class="fa-sharp fa-solid fa-trash modal-article__trash-icon"></i></span>
          <p class="modal-article__edit">éditer</p>
        </div>
      `).join('');

      this.modalWorkContainer.innerHTML = modalContentHTML;
    }

    handleFilterButtonClick(event) {

        const categoryId = parseInt(event.target.id);
        this.model.workFilter(categoryId);
        this.displayWorksGallery();

    }
      
}