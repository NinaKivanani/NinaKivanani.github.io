window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";

    }, 1000)
})


// Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show")
                portfolioItems[k].classList.add("hide")
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }

    })
}



// Portfolio Lightbox

const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0
    }
    else {
        itemIndex++
    }
    changeItem()
}
function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1
    }
    else {
        itemIndex--;
    }
    changeItem()
}
//Body.......
function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

// Close Lightbox
lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }

})


// Aside Navbar

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // remove back section
        removeBackSectionClass();

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // add back section
                addBackSectionClass(j);
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSectionClass(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const hireMe = document.querySelector(".hire-me");
if (hireMe) {
    hireMe.addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn)
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Citation copy and toggle function
function copyBibTeX(citationId) {
    const citationElement = document.getElementById(citationId);
    const citation = citationElement.innerText;
    
    // Toggle visibility of citation
    if (citationElement.style.display === 'none' || citationElement.style.display === '') {
        // Hide all other citations first
        document.querySelectorAll('.bibtex-citation').forEach(el => {
            el.style.display = 'none';
        });
        // Show this citation
        citationElement.style.display = 'block';
    } else {
        citationElement.style.display = 'none';
    }

    // Copy to clipboard
    navigator.clipboard.writeText(citation).then(() => {
        // Show a temporary success message
        const activeButton = document.activeElement && document.activeElement.classList.contains("link-btn")
            ? document.activeElement
            : null;
        if (activeButton) {
            const originalText = activeButton.innerHTML;
            activeButton.innerHTML = '<i class="fa fa-check"></i> Copied';
            setTimeout(() => {
                activeButton.innerHTML = originalText;
            }, 1800);
        }
    });
}

// Section Activation
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") || e.target.closest(".nav") !== null) {
        const target = e.target.closest("a");
        if (target) {
            const sectionId = target.getAttribute("href");
            if (sectionId) {
                e.preventDefault();
                const section = document.querySelector(sectionId);
                if (section) {
                    // Remove active class from all sections
                    document.querySelectorAll(".section.active").forEach((section) => {
                        section.classList.remove("active");
                    });
                    // Remove active class from all nav items
                    document.querySelectorAll(".nav a").forEach((nav) => {
                        nav.classList.remove("active");
                    });
                    // Add active class to clicked nav item
                    target.classList.add("active");
                    // Add active class to current section
                    section.classList.add("active");
                }
            }
        }
    }
});

// Keep external links safe when opening in new tabs
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        link.setAttribute("rel", "noopener noreferrer");
    });
});

// News item toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-news');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the parent timeline item
      const timelineItem = this.closest('.timeline-item');
      
      // Toggle expanded class
      timelineItem.classList.toggle('expanded');
      
      // Update button text and icon
      if (timelineItem.classList.contains('expanded')) {
        this.innerHTML = 'Show Less <i class="fa fa-chevron-up"></i>';
      } else {
        this.innerHTML = 'Read More <i class="fa fa-chevron-down"></i>';
      }
    });
  });
});

// Minimalist News Ticker functionality
document.addEventListener('DOMContentLoaded', function() {
  const newsTicker = document.querySelector('.news-ticker');
  if (!newsTicker) {
    return;
  }

  // Add collapse button to the ticker
  const collapseBtn = document.createElement('button');
  collapseBtn.className = 'ticker-collapse-btn';
  collapseBtn.innerHTML = '<i class="fa fa-chevron-left"></i>';
  newsTicker.appendChild(collapseBtn);
  
  // Toggle ticker visibility
  collapseBtn.addEventListener('click', function() {
    newsTicker.classList.toggle('collapsed');
    this.innerHTML = newsTicker.classList.contains('collapsed') ? 
      '<i class="fa fa-chevron-right"></i>' : 
      '<i class="fa fa-chevron-left"></i>';
  });
  
  // Toggle news item details
  const toggleButtons = document.querySelectorAll('.ticker-toggle');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tickerItem = this.closest('.ticker-item');
      tickerItem.classList.toggle('expanded');
      
      if (tickerItem.classList.contains('expanded')) {
        this.innerHTML = 'Less <i class="fa fa-plus"></i>';
      } else {
        this.innerHTML = 'More <i class="fa fa-plus"></i>';
      }
    });
  });
});

// Portfolio details view controls
document.addEventListener('DOMContentLoaded', function() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const projectDetails = document.querySelectorAll('.project-details');
  const filterButtons = document.querySelectorAll('.portfolio-filter button');

  if (!portfolioItems.length || !projectDetails.length || !filterButtons.length) {
    return;
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      if (filter === 'all') {
        portfolioItems.forEach(item => {
          item.style.display = 'block';
        });

        projectDetails.forEach(detail => {
          detail.style.display = 'none';
        });
      } else {
        portfolioItems.forEach(item => {
          item.style.display = 'none';
        });

        projectDetails.forEach(detail => {
          detail.style.display = 'none';
        });

        const selectedDetails = document.querySelector(`.${filter}-details`);
        if (selectedDetails) {
          selectedDetails.style.display = 'block';
        }
      }
    });
  });

  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const filterButton = document.querySelector(`.portfolio-filter button[data-filter="${category}"]`);
      if (filterButton) {
        filterButton.click();
      }
    });
  });

  document.querySelectorAll('.back-to-all-btn').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelector('.portfolio-filter button[data-filter="all"]').click();
    });
  });

  document.querySelector('.portfolio-filter button[data-filter="all"]').click();
});