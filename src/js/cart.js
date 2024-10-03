import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // if there are no items in the cart, display a message
  if (!cartItems) {
    document.querySelector(".product-list").innerHTML =
      "<p>Your cart is empty</p>";
    return;
  }

  // otherwise, display the cart items
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));

  // calculate total price
  let total = 0;
  cartItems.forEach((item) => {
    total += parseFloat(item.FinalPrice);
  });
  
  const cartFooter = document.querySelector(".cart-footer");
  // show the cart footer
  // cartFooter.removeAttribute("hidden");
  // add total price to the cart footer
  cartFooter.innerHTML = `<p class="cart-total">Total: $${total.toFixed(2)}</p>`;

  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Update backpack icon
  // updateCartIcon(cartItems.length);
}

// HTML for Display of the Cart
function cartItemTemplate(item) {
  const newItem = `
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}"/>
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;

  return newItem;
}

// function updateCartIcon(itemCount) {
//   // const itemCountElement = document.querySelector("span"); // Use # for ID
//   // itemCountElement.innerHTML = itemCount > 0 ? `<sup>${itemCount}</sup>` : ''; // Show sup if count > 0

// }


renderCartContents();
