import { products } from "../data/products";
export const task = new Promise((resolve, reject) => {
  resolve(true);
});

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getItemFromId = (id) => {
  const selectedProduct = products.filter((product) => {
    return product.id === id;
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(selectedProduct);
    }, 300);
  });
};
