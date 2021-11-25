class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        nav {
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          .nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
          }
          .nav-toggle {
            font-size: 1.5rem;
            color: #49a6e9;
            background: transparent;
            border-color: transparent;
            transition: all 0.3s linear;;
            cursor: pointer;
          }
          .nav-toggle:hover {
            color: hsl(205, 86%, 17%);
            transform: rotate(90deg);
          }
          .logo {
            height: 40px;
          }
          .links a {
            color: hsl(209, 34%, 30%);
            font-size: 1rem;
            text-transform: capitalize;
            letter-spacing: 0.25rem;
            display: block;
            padding: 0.5rem 1rem;
            transition: all 0.3s linear;
          }
          .links a:hover {
            background: hsl(205, 86%, 81%);
            color: #49a6e9;
            padding-left: 1.5rem;
          }
          .social-icons {
            display: none;
          }
          .links {
            height: 0;
            overflow: hidden;
            transition: all 0.3s linear;
          }
          .show-links {
            height: 10rem;
          }
          @media screen and (min-width: 800px) {
            .nav-center {
              max-width: 1170px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 1rem;
            }
            .nav-header {
              padding: 0;
            }
            .nav-toggle {
              display: none;
            }
            .links {
              height: auto;
              display: flex;
            }
            .links a {
              padding: 0;
              margin: 0 0.5rem;
            }
            .links a:hover {
              padding: 0;
              background: transparent;
            }
            .social-icons {
              display: flex;
            }
            .social-icons a {
              margin: 0 0.5rem;
              color: #49a6e9;
              transition: all 0.3s linear;
            }
            .social-icons a:hover {
              color: hsl(205, 90%, 76%);
            }
          }
        </style>
        <header>
          <nav>
          <div class="nav-center">
          <ul class="links">
            <li><a href="../pages/index.html">home</a></li>
            <li><a href="../pages/about.html">about</a></li>
            <li><a href="../pages/portfolio/portfolio.html">portfolio</a></li>
              
          </ul>
          <!-- social media -->
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

