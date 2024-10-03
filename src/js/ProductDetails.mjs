<<<<<<< HEAD
import { setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
    return `<section class="product-detail"> 
        <h3>${product.Brand.Name}</h3>
      <h2 class="divider">${product.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${product.FinalPrice}</p>
      <p class="product__color">${product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      </div></section>`;
  }

  

export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId;
      this.dataSource = dataSource;
      this.product = {};
    }
    
    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        // console.log(this.product.Brand);
        this.renderProductDetails("main");
    // HTML is rendered 
    // add a listener to Add to Cart button
    // Notice the .bind(this).
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
    }

    addToCart() {
        setLocalStorage("so-cart", this.product);
=======
import { getLocalStorage, setLocalStorage } from "./utils.mjs";


// HTML for the Details Page of a selected product
function productDetailsTemplate(product) {
    return `
        <section class="product-detail"> 
            <h3>${product.Brand.Name}</h3>
            <h2 class="divider">${product.NameWithoutBrand}</h2>
            <img class="divider" src="${product.Image}" alt="${product.NameWithoutBrand}"/>        
            <p class="product-card__price">$${product.FinalPrice}</p>
            <p class="product__color">${product.Colors[0].ColorName}</p>
            <p class="product__description">${product.DescriptionHtmlSimple}</p>
            <div class="product-detail__add">
                <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
            </div>
        </section>
    `;
}

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
        document.getElementById("addToCart").addEventListener("click", this.addToCart.bind(this));
    }

    addToCart() {
        const cart = getLocalStorage("so-cart") || [];                        // retrieve current cart info from local storage
        const exists = cart.some(product => product.Id === this.product.Id);  // check if the product is already in the cart

        // if the product isn't already in the cart, add it, otherwise do nothing
        if (!exists) {
            // add new item to the cart
            cart.push(this.product);
            // update local storage with complete cart
            setLocalStorage("so-cart", cart);
        }
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
    }

    renderProductDetails(selector) {
        const element = document.querySelector(selector);
<<<<<<< HEAD
        element.insertAdjacentHTML(
          "afterBegin",
          productDetailsTemplate(this.product)
        );
    }
}

=======
        element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
    }
}
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
