export const SideNavbarToggler = () => {
  const className = "show-sideNavbar";
  const navbar = document.querySelector(".Navbar-wrapper");
  navbar.classList.toggle(className);
  document.body.classList.toggle("overflow-hidden");
};
