import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();
const checkout = new CheckoutProcess("so-cart", ".product-list");
checkout.init();

document.getElementById("zip").addEventListener("input", () => {
    checkout.calculateOrderTotal();
});
