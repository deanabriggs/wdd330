import { getLocalStorage, setLocalStorage, alertMessage } from "./utils.mjs";


// HTML for the Details Page of a selected product
function productDetailsTemplate(product) {
    return `
        <section class="product-detail"> 
            <h3>${product.Brand.Name}</h3>
            <h2 class="divider">${product.NameWithoutBrand}</h2>
            <img class="divider" src="${product.Images.PrimaryLarge}" alt="${product.NameWithoutBrand}"/>        

            <p class="product-card__price">$${product.FinalPrice}
                <span class="discount"> -${calculateDiscount(product).toFixed(0)}%</span>
                </p>
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
        // Update this.product with quantity
        this.product.Quantity = (this.product.quantity || 0) + 1; // Defaults to 0 if undefined; // This will increment the quantity by 1
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
            // put an alert message when the product is added to the cart
            alertMessage("Product added to cart", true);
            // update local storage with complete cart
            setLocalStorage("so-cart", cart);
            cartAnimate();
            
        }

    }

    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
    }
}

// calculate the amount of the discount on the product and return the value
export function calculateDiscount(product) {
    let discount = ((product.SuggestedRetailPrice - product.FinalPrice)/product.SuggestedRetailPrice) * 100;
    return discount;
}

// Animate cart (backpack)
function cartAnimate() {
    const cartLink = document.querySelector(".cart a");
    // Trigger animation
    cartLink.classList.add('active');
    // Remove the active class after the animation completes
    setTimeout(() => {
        cartLink.classList.remove('active');
      }, 600); // Duration must match the CSS transition duration
}