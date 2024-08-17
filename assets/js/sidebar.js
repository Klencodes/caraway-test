//Toggle sidebar
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const navIcon = document.querySelector(".nav-icon");

  // Toggle the 'collapsed' class on the sidebar
  sidebar.classList.toggle("collapsed");

  // Adjust icon position based on sidebar state
  if (sidebar.classList.contains("collapsed")) {
    navIcon.style.left = "0";
  } else {
    navIcon.style.left = "215px"; // Adjust this value if needed
  }
}

function toggleMobileMenuSidebar() {
  const mobileMenu = document.querySelector(".mobile-menu");

  // Toggle the 'active' class on the sidebar
  mobileMenu.classList.toggle("active");

  // Adjust icon position based on sidebar state
  if (mobileMenu.classList.toggle("active")) {
    navIcon.style.left = "0";
  } else {
    navIcon.style.left = "215px";
  }
}

// Toggling sidebar nav items
function toggleSection(header) {
  const section = header.parentElement;

  // If section is hidden, make it active
  if (section.classList.contains("hide")) {
    section.classList.remove("hide");
    section.classList.add("active");
  } else {
    // If section is active, hide it
    section.classList.remove("active");
    section.classList.add("hide");
  }
}

function toggleCookwareMenu() {
  const navLinks = document.querySelector(".nav-link");
  navLinks.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0; // Start with the first swiper item
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const swiperItems = document.querySelectorAll(".swiper-wrapper > div");
  const totalItems = swiperItems.length;

  // Swipe event handling variables
  let touchStartX = 0;
  let touchEndX = 0;
  let swipeThreshold = 50; // Minimum distance to be considered a swipe

  // Function to update swiper view based on index
  function updateSwiper() {
    const translateX = -currentIndex * 100;
    swiperWrapper.style.transform = `translateX(${translateX}%)`;
    swiperWrapper.style.webkitTransform = `translateX(${translateX}%)`; // Add webkit prefix
  }

  function handleGesture() {
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance < 0) {
        // Swiped left
        currentIndex = Math.min(currentIndex + 1, totalItems - 1);
      } else {
        // Swiped right
        currentIndex = Math.max(currentIndex - 1, 0);
      }
      updateSwiper();
    }
  }

  swiperWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  swiperWrapper.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  // Initial update
  updateSwiper();
});
