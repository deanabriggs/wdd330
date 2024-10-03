<<<<<<< HEAD

import { renderListWithTemplate } from "./utils.mjs";

export function productCardTemplate(product) {
    return `<li class="product-card">
                <a href="product_pages/index.html?product=${product.Id}">
                <img
                    src= ${product.Image}
                    alt= ${product.Name}
                />
                <h3 class="card__brand">${product.Brand.Name}</h3>
                <h2 class="card__name">${product.Name}</h2>
                <p class="product-card__price">$${product.FinalPrice}</p>
                </a>
          </li>`
  }


export default class ProductList{
    constructor(category, dataSource, listElement){
=======
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    // populates products to the home page
    return `
    <li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}">
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
    </li>`
}

export default class ProductListing {
    // assigns variables to data
    constructor(category, dataSource, listElement) {
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

<<<<<<< HEAD

    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData();
      // render the list
      this.renderList(list);
    }

     // render before doing the stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }


  // async filterProducts(criteria) {
  //   const list = await this.dataSource.getData(); // Get the complete product list
  //   const filteredList = list.filter(product => {
  //     let matches = true;
  //     if (criteria.category) {
  //       matches = matches && product.category === criteria.category;
  //     }
  //     if (criteria.maxPrice !== undefined) {
  //       matches = matches && product.FinalPrice < criteria.maxPrice; // Assuming FinalPrice is the price property
  //     }
  //     if (criteria.name) {
  //       matches = matches && product.Name.includes(criteria.name); // Check product name
  //     }
  //     // Check if the product has an image
  //     matches = matches && product.Image; // Assuming `Image` holds the image URL or path

  //     return matches;
  //   })
  //   this.renderList(filteredList); // Render the filtered list
  // }
    
    



=======
    // obtains the data
    async init() {
        const list = await this.dataSource.getData();
        const filteredList = filterList(list);
        this.renderList(filteredList);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}

// filter the list to only include the 4 products we want to display
export function filterList(list) {
    const filteredProducts = ["880RR", "985RF", "985PR", "344YJ"];
    return list.filter(product => filteredProducts.includes(product.Id));
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
}