import ProductData from "./ProductData.mjs";
<<<<<<< HEAD
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

// const listfilter = new ProductList('Tents', dataSource, listElement);
// await listing.filterProducts('Tents');

// listfilter.init();

listing.init();
// console.log("it works");
=======
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productList = new ProductListing("Tents", dataSource, listElement);
productList.init();
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
