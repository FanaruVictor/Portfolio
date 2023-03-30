const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__li");

  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;

    mobileNav.style.display = isMobileNavOpen ? "flex" : "none";
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "auto";
  });

  mobileLinks.forEach((x) => {
    x.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
