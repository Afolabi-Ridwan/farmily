import productsStore from "@/stores/productsStore/ProductsStore";


export const dataFetcher = () =>
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      productsStore.setState({ products: json });
    });