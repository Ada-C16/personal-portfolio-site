class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div>
          Copyright 2021; Karishma Johnson
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);

