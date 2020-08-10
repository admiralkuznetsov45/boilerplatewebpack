class CardMeal extends HTMLElement {
    constructor() {
        super();
        console.log("constructed!")
    }


    connectedCallback() {
        this.name = this.getAttribute("name") || null;
        this.description = this.getAttribute("description") || null;
        this.src = this.getAttribute("src")

        this.innerHTML = `
        <div class="card mb-4 box-shadow">
        <img class="card-img-top" data-src="${this.src}" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="${this.src}" data-holder-rendered="true">
        <div class="card-body">
        <h4>${this.name}</h4>
          <p class="card-text">${this.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
        `;
    }


    disconnectedCallback() {
        console.log("disconnected!");
    }


    adoptedCallback() {
        console.log("adopted!");
    }


    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute: ${name} changed!`);
    }


    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes() {
        return ["caption"];
    }

}

customElements.define("card-meal", CardMeal);