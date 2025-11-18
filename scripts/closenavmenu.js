document.addEventListener("click", function (event) {
  const navmenu = document.getElementById("navbarNav");
  const toggle = document.getElementById("navbar-toggler");

  const isMenuOpen = navmenu.classList.contains("show");
  if (
    isMenuOpen &&
    !navmenu.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    navmenu.classList.remove("show");
  }
});
