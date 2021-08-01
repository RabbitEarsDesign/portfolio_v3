// SWIPER JS
// Initialize swiper

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },

    999: {
      slidesPerView: 2,
    },

    1499: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// END

//
// ANIMATE LOGO ON PAGELOAD
//
function firstLoad() {
  // If this is the first visit then add 'doNotShow' to session storage and run preloader
  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);

    disableScrolling();
    preloader(enableScrolling());
  } else {
    document.getElementById("preloader").style.display = "none";
  }
}

firstLoad();

// Preload Function is used to apply loaded class to animation
function preloader(callback) {
  // disableScrolling();
  window.onload = () => {
    setTimeout(() => {
      const body = document.querySelector("body");

      body.classList.add("loaded");
    }, 4200);
    callback();
  };
}

// Enable / Disable scroll
function enableScrolling() {
  setTimeout(() => {
    document.documentElement.style.overflow = "visible";
  }, 6500);
}

function disableScrolling() {
  document.documentElement.style.overflow = "hidden";
}
// END

//
// SHOW PROJECT DATA
//
// I am not happy with how this code is written, there has to be a better more eficient way to display these cards
// need to basically run a different function depensind which swuiper slide array is clicked. everything wioll be the same excpet for the array that data is coming from
// or create 1 array with 2 objects and each object represents the specific swiper slide section
function showClientWork() {
  // Get various project content inputs via id
  const card = document.getElementById("popup-card");
  const close = document.getElementById("close");
  const cardImage = document.getElementById("card-image");
  const cardHeader = document.getElementById("card-header");
  const cardLabelYear = document.getElementById("card-label-year");
  const cardLabelType = document.getElementById("card-label-biz-type");
  const cardLabelCategory = document.getElementById("card-label-category");
  const cardDescription = document.getElementById("card-description");
  const github = document.getElementById("github");
  const website = document.getElementById("website");

  const projects = document.querySelectorAll(".client-work");
  const projectsArr = Array.from(projects);

  // Create array of project data
  // keep in mind you may need to change img locations once you launch
  const projectData = [];

  projectsArr.forEach((item) => {
    item.addEventListener("click", () => {
      if (projectsArr.indexOf(item) + 1 <= projectData.length) {
        card.style.display = "block";

        let indexOfSwiper = projectsArr.indexOf(item);

        cardHeader.innerHTML = projectData[indexOfSwiper].cardHeaderData;
        cardLabelYear.innerHTML = projectData[indexOfSwiper].cardLabelYearData;
        cardImage.src = projectData[indexOfSwiper].cardImageData;
        cardLabelType.innerHTML =
          projectData[indexOfSwiper].cardLabelBizTypeData;
        cardLabelCategory.innerHTML =
          projectData[indexOfSwiper].cardLabelCategoryData;
        cardDescription.innerHTML =
          projectData[indexOfSwiper].cardDescriptionData;
        github.href = projectData[indexOfSwiper].githubData;
        website.href = projectData[indexOfSwiper].websiteData;
      } else {
        project.style.display = "none";
      }
    });
  });

  close.addEventListener("click", () => {
    card.style.display = "none";
  });

  // if (window.getComputedStyle(card).display === "block") {
  //   window.onclick = function (event) {
  //     if (event.target !== card) {
  //       card.style.display = "none";
  //       console.log("test");
  //     }
  //   };
  // }
}

function showPersonalProjects() {
  // Get various project content inputs via id
  const card = document.getElementById("personal-popup-card");
  const close = document.getElementById("personal-close");
  const cardImage = document.getElementById("personal-card-image");
  const cardHeader = document.getElementById("personal-card-header");
  const cardLabelYear = document.getElementById("personal-card-label-year");
  const cardLabelType = document.getElementById("personal-card-label-biz-type");
  const cardLabelCategory = document.getElementById(
    "personal-card-label-category"
  );
  const cardDescription = document.getElementById("personal-card-description");
  const github = document.getElementById("personal-github");
  const website = document.getElementById("personal-website");

  const projects = document.querySelectorAll(".personal-project");
  const projectsArr = Array.from(projects);

  // Create array of project data
  // keep in mind you may need to change img locations once you launch
  const projectData = [
    // Moment Gallery
    {
      cardHeaderData: "Moment Skis Gallery",
      cardImageData: "./img/projects/moment_skis_gallery2.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Ski Company",
      cardLabelCategoryData: "Outdoor Sports Industry",
      cardDescriptionData:
        "Moment Skis Gallery is a virtual museum built to showcase all of the unique topsheet graphics designed by Moment Skis since their founding over a decade ago. This is a project built entirely for personal enjoyment and is updated periodically when time allows. Ultimately it will be a place to learn about each ski and follow the history of the company as they continue designing rad art on skis. Click the link to explore for yourself!",
      githubData: "https://github.com/RabbitEarsDesign/moment_skis_gallery",
      websiteData: "https://momentskisgallery.com",
    },

    // Bobs Bowling
    {
      cardHeaderData: "Bob's Bowling",
      cardImageData: "./img/projects/bobs_bowling1.png",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Bowling Alley",
      cardLabelCategoryData: "Small Business",
      cardDescriptionData:
        "Bob’s Bowling is a fictional company for which I designed a website in order to showcase the kind of product my clients can expect to receive. This website is an example of the custom solutions I offer. Click the link below to visit and see for yourself!",
      githubData: "https://github.com/RabbitEarsDesign/bowling_website",
      websiteData: "https://relaxed-meninsky-b2c08d.netlify.app",
    },

    // Wordpress Site
    {
      cardHeaderData: "Ski Colorado",
      cardImageData: "./img/projects/cover/coming_soon.jpg",
      cardLabelYearData: "2021",
      cardLabelBizTypeData: "Wordpress Site",
      cardLabelCategoryData: "Small Business",
      cardDescriptionData:
        "'Ski Colorado' is a fictional Heli Skiing company. I built this in order to showcase an example of a site made using Wordpress. When you choose Rabbit Ears Design I spend the time getting to know your business needs in order to provide a solution that exceeds expectations.",
      githubData: "https://github.com",
      websiteData: "https://examplewebsite.website",
    },
  ];

  projectsArr.forEach((item) => {
    item.addEventListener("click", () => {
      if (projectsArr.indexOf(item) + 1 <= projectData.length) {
        card.style.display = "block";

        let indexOfSwiper = projectsArr.indexOf(item);

        cardHeader.innerHTML = projectData[indexOfSwiper].cardHeaderData;
        cardLabelYear.innerHTML = projectData[indexOfSwiper].cardLabelYearData;
        cardImage.src = projectData[indexOfSwiper].cardImageData;
        cardLabelType.innerHTML =
          projectData[indexOfSwiper].cardLabelBizTypeData;
        cardLabelCategory.innerHTML =
          projectData[indexOfSwiper].cardLabelCategoryData;
        cardDescription.innerHTML =
          projectData[indexOfSwiper].cardDescriptionData;
        github.href = projectData[indexOfSwiper].githubData;
        website.href = projectData[indexOfSwiper].websiteData;
      } else {
        project.style.display = "none";
      }
    });
  });

  close.addEventListener("click", () => {
    card.style.display = "none";
  });
}

showClientWork();
showPersonalProjects();
