import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    // populates products to the product page
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
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

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
}