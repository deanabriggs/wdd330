<<<<<<< HEAD
import { getLocalStorage, setLocalStorage, getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

// const dataSource = new ProductData("tents");
// ////// testing getParams
// const productId = getParams("product");
// // console.log(para);
// console.log(dataSource.findProductById(productId));
// // end of test
=======
import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49

loadHeaderFooter();

const productId = getParam("product");
const dataSource = new ProductData("tents");
<<<<<<< HEAD
const productId = getParams("product");
const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(product) {
  // Get the current cart items from local storage or initialize it empty array
  const currentCartItems = getLocalStorage("so-cart") || [];

  // Add new product 
  currentCartItems.push(product); 

  // Save the updated cart item back to local storage
  setLocalStorage("so-cart", currentCartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
=======
const product = new ProductDetails(productId, dataSource);
product.init();
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
