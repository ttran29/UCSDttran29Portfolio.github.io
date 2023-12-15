// script.js

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  let lastScrollPosition = 0;

  window.addEventListener("scroll", function () {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      header.style.opacity = "0.7"; // Adjust the opacity value as needed
    } else {
      // Scrolling up
      header.style.opacity = "1";
    }

    lastScrollPosition = currentScrollPosition;
  });
});
