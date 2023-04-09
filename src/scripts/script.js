const toggleNavBarBtn = document.getElementById("toggle-navbar-btn");
const navBarModal = document.getElementById("responsive-nav-bar");
const closeNavBarBtn = document.getElementById("close-nav-bar-btn");

const toggleNavBar = () => {
  navBarModal.classList.toggle("hidden");
  document.body.style.overflow = document.body.style.overflow.length ? "" : "hidden";
}

toggleNavBarBtn.addEventListener("click", toggleNavBar);
closeNavBarBtn.addEventListener("click", toggleNavBar);

const productSectionRef = document.getElementById("product-section");
const customerSectionRef = document.getElementById("customer-section");
const pricingSectionRef = document.getElementById("pricing-section");

const navigate = (htmlElement, scrollLogicalPosition = "start") => htmlElement.scrollIntoView({ behavior: "smooth", block: scrollLogicalPosition });

document.getElementById("product-nav-link").addEventListener("click", () => navigate(productSectionRef));
document.getElementById("customer-nav-link").addEventListener("click", () => navigate(customerSectionRef));
document.getElementById("pricing-nav-link").addEventListener("click", () => navigate(pricingSectionRef));

document.getElementById("product-mobile-nav-link").addEventListener("click", () => {
  toggleNavBar();
  navigate(productSectionRef);
});

document.getElementById("customer-mobile-nav-link").addEventListener("click", () => {
  toggleNavBar();
  navigate(customerSectionRef);
});

document.getElementById("pricing-mobile-nav-link").addEventListener("click", () => {
  toggleNavBar();
  navigate(pricingSectionRef);
});

document.getElementById("pricing-footer-nav-link").addEventListener("click", () => navigate(pricingSectionRef));