const CART_KEY = "shoppingCart";

window.onload = function() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let shoppingCart = JSON.parse(sessionStorage.getItem(CART_KEY));

    if (shoppingCart) {
        document.getElementById("cart").innerText = shoppingCart.size;

        if (shoppingCart.size == 0) {
            displayNoProducts(list);
        } else {
            displayListHeader(list);
            displayListProducts(list, shoppingCart);
        }
    } else {
        sessionStorage.setItem(CART_KEY, JSON.stringify({
            size: 0,
            products: []
        }));
        document.getElementById("cart").innerText = "0";
        displayNoProducts(list);
    }
}

function displayNoProducts(div) {
    div.innerHTML = `
        <div class="row text-center">
            <div class="col-12">
            <h2>¡No hay productos agregados!</h2>
            </div>
        </div>
    `;
}

function displayListHeader(div) {
    div.innerHTML = `
        <div class="row text-center mb-3">
            <div class="col-4">
                <h4>Producto</h4>
            </div>
            <div class="col-2">
                <h4>Cantidad</h4>
            </div>
            <div class="col-3">
                <h4>Precio</h4>
            </div>
            <div class="col-3">
                <h4>Opciones</h4>
            </div>
        </div>
    `;
}

function displayListProducts(div, shoppingCart) {
    let totalPrice = 0.0;
    let sendPrice = 200.0;

    for (let i = 0; i < shoppingCart.products.length; ++i) {
        let subprice = shoppingCart.products[i].quantity * parseFloat(shoppingCart.products[i].info.price);
        totalPrice += subprice;
        div.innerHTML += `
            <div class="row text-center">
                <div class="col-1">
                    <img class="card-img-top" src="${shoppingCart.products[i].info.photo}">
                </div>
                <div class="col-2">
                    <a href="product.html?code=${shoppingCart.products[i].info.cod}"><h5>${shoppingCart.products[i].info.name}</h5></a>
                </div>
                <div class="col-1 mt-3"></div>
                <div class="col-2 mt-2">
                    <input id="qua-${i}" class="form-control" type="number" min="1" value="${shoppingCart.products[i].quantity}"
                     oninput="setPrice('qua-${i}', 'pri-${i}', '${shoppingCart.products[i].info.cod}')" onkeydown="return false">
                </div>
                <div id="pri-${i}" class="col-3 mt-3">
                    $${subprice}
                </div>
                <div class="col-3 mt-2">
                    <button class="btn btn-block btn-danger btn-outline-danger" disabled>Eliminar</button>
                </div>
            </div>
            <hr>
        `;
    }

    div.innerHTML += `
        <div class="row text-right">
            <div class="col-6"></div>
            <div class="col-3">
                <h3>Subtotal:</h3>
            </div>
            <div class="col-3 text-center mt-1">
                <h5>$${totalPrice}</h5>
            </div>
        </div>
    `;

    div.innerHTML += `
        <div class="row text-right">
            <div class="col-6"></div>
            <div class="col-3">
                <h3>Envío:</h3>
            </div>
            <div class="col-3 text-center mt-1">
                <h5>$${sendPrice}</h5>
            </div>
        </div>
    `;

    div.innerHTML += `
        <div class="row text-right">
            <div class="col-6"></div>
            <div class="col-3">
                <h3>Total:</h3>
            </div>
            <div class="col-3 text-center mt-1">
                <h5>$${totalPrice + sendPrice}</h5>
            </div>
        </div>
    `;

    div.innerHTML += `
        <div class="row">
            <div class="col-9"></div>
            <div class="col-3">
                <button class="btn btn-success btn-outline-success btn-block" onclick="finishSell()">Confirmar compra</button>
            </div>
        </div>
    `;
}

function setPrice(quantityInputID, priceTextID, productCode)
{
    let input = document.getElementById(quantityInputID);
    let shoppingCart = JSON.parse(sessionStorage.getItem(CART_KEY));
    let i = shoppingCart.products.findIndex(function(product) {
        return product.info.cod === productCode;
    });
    let newPrice = parseInt(input.value) * parseFloat(shoppingCart.products[i].info.price);
    
    document.getElementById(priceTextID).innerText = "$" + newPrice;
    shoppingCart.size += parseInt(input.value) - shoppingCart.products[i].quantity;
    shoppingCart.products[i].quantity = parseInt(input.value);
    document.getElementById("cart").innerText = shoppingCart.size;
    sessionStorage.setItem(CART_KEY, JSON.stringify(shoppingCart));
}

function finishSell() {
    alert("Compra terminada");
    sessionStorage.removeItem(CART_KEY);
    document.getElementById("cart").innerText = "0";
    displayNoProducts(document.getElementById("list"));
}