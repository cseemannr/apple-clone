// video

document.querySelector("video").src = `/imgs/video${Math.round(
  Math.random() * 2 + 1
)}.mp4`;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      vid.play();
    }
  });
});

observer.observe(vid);

// mobile menu

const menuIcon = document.querySelector(".menu-icon");
const dropDownMobile = document.querySelector(".drop-down-mobile-menu");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  dropDownMobile.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("fixed");
});

// slider

var slider = tns({
  container: ".my-slider",
  gutter: 12,
  speed: 700,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3500,
  autoplayText: ["▶", "❚❚"],
  navPosition: "bottom",
  autoplayPosition: "botttom",
  controlsContainer: "#custom-control",
  center: true,
  mouseDrag: true,
  responsive: {
    0: {
      edgePadding: 70,
    },
    550: { edgePadding: 110 },
    500: {
      edgePadding: 150,
    },
    700: { edgePadding: 220 },
    735: {
      edgePadding: 80,
    },
    800: { edgePadding: 120 },
  },
});

slider.events.on("indexChanged", function () {
  var info = slider.getInfo(),
    indexPrev = info.indexCached,
    indexCurrent = info.index;

  // update style based on index
  info.slideItems[indexPrev].classList.remove("opacity");
  info.slideItems[indexCurrent].classList.add("opacity");
});

//footer tabs

const footerTabs = document.querySelectorAll(".flex-container-tab");

footerTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tab.classList.toggle("active");
  });
});
