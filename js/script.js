/* HAMBURGER TOGGLE */
const hb = document.getElementById("lbHamburger");
const nav = document.getElementById("lbNav");

hb.addEventListener("click", () => {
  hb.classList.toggle("active");
  nav.classList.toggle("open");
});

/* CART TOGGLE */
const cartBtn = document.getElementById("lbCartBtn");
const cartDrop = document.getElementById("lbCartDropdown");

cartBtn.addEventListener("click", () => {
  const expanded = cartBtn.getAttribute("aria-expanded") === "true";
  cartBtn.setAttribute("aria-expanded", !expanded);
  cartDrop.setAttribute("aria-hidden", expanded);
  cartDrop.classList.toggle("open");
});
