const portfolioPieces = [
    {
        id: 1, 
        title: "munthir",
        img: 0,
        medium: "linocut",
        page: "",
        desc: "things"
    },
    {
        id: 2,
        title: "lost at sea",
        img:"",
        medium: "digital",
        page: "",
        desc: ""
    },
    {
        id: 3, 
        title: "brush your teeth",
        img: "",
        medium: "linocut",
        page: "",
        desc: "here to offer (m)oral support"
    },
    {
        id: 4, 
        title: "rolling in the deep",
        img: "",
        medium: "linocut",
        page: "",
        desc: "you ever feel like you're sinking and sinking so far down"
    },
    {
        id: 5,
        title: "sweet tomatoes",
        img: "",
        medium: "linocut",
        page: "",
        desc: "a goddess and her lover"
    }


]

const btnContainer = document.querySelector(".btn-container")
const portfolioView = document.querySelector(".art")

window.addEventListener("DOMContentLoaded", function () {
    diplayProjectItems(portfolioPieces);
    displayProjectButtons();
  });
  
  function diplayProjectItems(portfolioPieces) {
    let displayProject = portfolioPieces.map(function (item) {
      // console.log(item);
  
      return `<article class="portfolio-piece" onclick="location.href='${item.page}'">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="piece-info">
              <header>
                <h4>${item.title}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayProject = displayProject.join("");
    
    portfolioView.innerHTML = displayProject;
  }
  function displayProjectButtons() {
    const categories = portfolioPieces.reduce(
      function (values, item) {
        if (!values.includes(item.medium)) {
          values.push(item.medium);
        }
        return values;
      },
      ["all"]
    );
    const mediumBtns = categories
      .map(function (medium) {
        return `<button type="button" class="filter-btn" data-id=${medium}>
            ${medium}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = mediumBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const medium = e.currentTarget.dataset.id;
        const projectmedium = portfolioPieces.filter(function (projectItem) {
          if (projectItem.medium === medium) {
            return projectItem;
          }
        });
        if (medium === "all") {
          diplayProjectItems(portfolioPieces);
        } else {
          diplayProjectItems(projectmedium);
        }
      });
    });
  }
  

  