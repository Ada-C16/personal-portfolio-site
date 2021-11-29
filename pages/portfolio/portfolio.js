const portfolioPieces = [
    {
      id: 1, 
      title: "brush your teeth",
      img: "../portfolio/brush-your-teeth/images/brush-your-teeth.jpg",
      medium: "linocut",
      page: "../portfolio/brush-your-teeth/brush-your-teeth.html",
      desc: "here to offer (m)oral support"
    },
    {
      id: 2,
      title: "lost at sea",
      img:"../portfolio/lost-at-sea/images/lost-at-sea.jpg",
      medium: "digital",
      page: "../portfolio/lost-at-sea/lost-at-sea.html",
      desc: "digital sketch about wanting to be not alive"
    },
    {
      id: 3, 
      title: "munthir",
      img: "../portfolio/munthir/images/munthir.jpg",
      medium: "linocut",
      page: "../portfolio/munthir/munthir.html",
      desc: "part of series 'the goddess'"
    },
    {
      id: 4,
      title: "pocket worship",
      img:"../portfolio/pocket-worship/images/goddess-pocket.jpg",
      medium: "linocut",
      page: "../portfolio/pocket-worship/pocket-worship.html",
      desc: "part of series 'the goddess'"
    },
    {
      id: 5,
      title: "for puja",
      img: "../portfolio/puja/images/goddess-puja.jpg",
      medium: "linocut",
      page:"../portfolio/puja/puja.html",
      desc: "part of series 'the goddess'"
    },

    {
      id: 6, 
      title: "rolling in the deep",
      img: "../portfolio/rolling-in-the-deep/images/rolling-in-the-deep.jpg",
      medium: "linocut",
      page: "../portfolio/rolling-in-the-deep/rolling-in-the-deep.html",
      desc: "you ever feel like you're sinking and sinking so far down"
    },
    {
      id: 7,
      title: "sweet tomatoes",
      img: "../portfolio/sweet-tomatoes/images/sweet-tomatoes.jpg",
      medium: "linocut",
      page: "../portfolio/sweet-tomatoes/sweet-tomatoes.html",
      desc: "a goddess and her lover. part of series 'the goddess'"
    },
    {
      id: 8,
      title: "thru the peephole",
      img: "../portfolio/thru-the-peephole/images/thru-the-peephole.jpg",
      medium: "linocut",
      page: "../portfolio/thru-the-peephole/thru-the-peephole.html",
      desc: "series: 'In My Home'"
    }
]


const portfolioView = document.querySelector(".art")
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function () {
    diplayportfolioPieces(portfolioPieces);
    displayProjectButtons();
  });
  
  function diplayportfolioPieces(portfolioPieces) {
    let displayProject = portfolioPieces.map(function (item) {
      // console.log(item);
  
      return `<article class="portfolio-piece" onclick="location.href='${item.page}'">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="piece-info">
              <header>
                <h4>${item.title}</h4>
              </header>
              <p class="piece-text">
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
        const medium = e.currentTarget.dataset.id;
        const projectmedium = portfolioPieces.filter(function (portfolioPiece) {
          if (portfolioPiece.medium === medium) {
            return portfolioPiece;
          }
        });
        if (medium === "all") {
          diplayportfolioPieces(portfolioPieces);
        } else {
          diplayportfolioPieces(projectmedium);
        }
      });
    });
  }
  

  