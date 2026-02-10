// tiny helper: set footer year + collapse navbar on click (mobile)
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const navCollapse = document.getElementById("navItems");
  if (navCollapse) {
    navLinks.forEach(link => link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }));
  }
})();
