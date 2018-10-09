const CART_KEY = "shoppingCart";

window.onload = function() {
    let shop = document.getElementById("shop");
    shop.innerHTML = "";

    for (let i = 0; i < products.length; ++i) {
        shop.innerHTML += `
            <div class="col-4 mb-3">
                <div class="card h-100">
                <a href="product.html?code=${products[i].cod}"><img class="card-img-top" src="${products[i].photo}"></a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="product.html?code=${products[i].cod}">${products[i].name}</a>
                    </h4>
                    <h5>${products[i].price}</h5>
                    <p class="card-text">${products[i].desc}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary btn-outline-primary btn-block" onclick="addProduct('${i}')">Carrito de compras</button>
                </div>
                </div>
            </div>
        `;
    }

    let shoppingCart = JSON.parse(sessionStorage.getItem(CART_KEY));

    if (shoppingCart) {
        document.getElementById("cart").innerText = shoppingCart.size;
    } else {
        sessionStorage.setItem(CART_KEY, JSON.stringify({
            size: 0,
            products: []
        }));
        document.getElementById("cart").innerText = "0";
    }
};

function addProduct(productID) {
    let shoppingCart = JSON.parse(sessionStorage.getItem(CART_KEY));

    let id = shoppingCart.products.findIndex(function(product) {
        return product.info.cod === products[productID].cod;
    });

    if (id == -1)
        shoppingCart.products.push({
            quantity: 1,
            info: products[productID]
        });
    else
        shoppingCart.products[id].quantity++;

    shoppingCart.size++;
    document.getElementById("cart").innerText = shoppingCart.size;
    sessionStorage.setItem(CART_KEY, JSON.stringify(shoppingCart));
}