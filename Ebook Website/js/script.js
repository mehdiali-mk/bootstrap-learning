function userScroll() {
  const navbarEl = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbarEl.classList.add("bg-primary");
      navbarEl.classList.add("navbar-sticky");
    } else {
      navbarEl.classList.remove("bg-primary");
      navbarEl.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
