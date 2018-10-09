function saveJson(products) {
    if (localStorage.getItem('products') === null)
        localStorage.setItem('products', JSON.stringify(products));
}

function saveProducts(UpProducts) {
    localStorage.products = UpProducts;
}

function saveJsonCart(cart) {
    if (localStorage.getItem('cart') === null)
        localStorage.setItem('cart', JSON.stringify(cart));
}

function saveCart(cart) {
    localStorage.cart = cart;
}