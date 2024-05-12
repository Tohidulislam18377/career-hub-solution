import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaderProducts = await fetch('jobs.json');
    const products = await loaderProducts.json();

    const storedCart = getShoppingCart();


    const savedCart = [];
    for (const id in storedCart) {
        const productId = parseInt(id);
        const addedProducts = products.find(product => product.id === productId);
        savedCart.push(addedProducts)
    }

    return savedCart
}

export default cartProductsLoader