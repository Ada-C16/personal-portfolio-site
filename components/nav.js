class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        @import "../components/stylesnav.css";
        </style>
        <header>
          <nav>
          <div class="nav-links">
            <ul class="links">
              <li><a href="../pages/index.html">home</a></li>
              <li><a href="../pages/about.html">about</a></li>
              <li><a href="../pages/portfolio/portfolio.html">portfolio</a></li>
            </ul>
          </div>
          <div class = "media">
            <ul class="social-icons">
                <li>
                    <a href="https://github.com/karishmacarterjohnson">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
              
                <li>
                    <a href="https://www.linkedin.com/in/karishmacarterjohnson/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>

                <li>
                    <a href="mailto:karishmacjohnson@gmail.com?subject=Just Saw Your Portfolio">
                        <i class="fa fa-envelope"></i>
                    </a>
                </li>
            </ul>
          </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

