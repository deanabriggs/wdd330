import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
<<<<<<< HEAD
        product: resolve(
          __dirname,
          "src/product_pages/index.html",
        ),
=======
        product: resolve(__dirname, "src/product_pages/index.html"),
>>>>>>> c5f8519993ef721844529c98fb2c28e6b426ca49
      },
    },
  },
});
