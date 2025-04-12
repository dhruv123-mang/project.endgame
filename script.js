document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Your table has been reserved!");
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const cartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartMessage = document.getElementById("cartMessage");
const orderMessage = document.getElementById("orderMessage");
const placeOrderBtn = document.getElementById("placeOrderBtn");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Added!";
    button.disabled = true;
    cartMessage.style.display = "block";
    setTimeout(() => { cartMessage.style.display = "none"; }, 6000);
  });
});

placeOrderBtn.addEventListener("click", () => {
  orderMessage.style.display = "block";
  setTimeout(() => { orderMessage.style.display = "none"; }, 6000);
});