const CART_KEY = "shoppingCart";
let areReviews;

window.onload = function() {
    let container = document.getElementById("container");
    let url = new URL(window.location.href);
    let code = url.searchParams.get("code");
    container.innerHTML = "";

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

    displayProduct(container, code);
    setReviewsHeader(container);
    displayReviews(container, code);
    displayNewReviewBox(container);
};

function displayProduct(div, productCode) {
    let index = products.findIndex(function(product) {
        return product.cod === productCode;
    });

    div.innerHTML = `
        <div class="row mb-3">
            <div class="col-5">
            <img class="img-fluid" src="${products[index].photo}">
            </div>
            <div class="col-7">
            <h3>${products[index].name}</h3><br>
            <h5>Precio: $${products[index].price}</h5><br>
            <h5>Descripción: ${products[index].desc}</h5><br>
            <h5>Cantidad:</h5>
            <div class="row">
                <div class="col-4">
                <input id="quantity" class="form-control" type="number" min="1" value="1" onkeydown="return false">
                </div>
                <div class="col-4">
                <button class="btn btn-block btn-primary btn-outline-primary" onclick="addProduct(${index})">Agregar al carrito</button>
                </div>
            </div>
            </div>
        </div>
    `;
}

function setReviewsHeader(div) {
    div.innerHTML += `
        <div class="row text-center">
            <div class="col-12 text-center">
            <h3>Reseñas</h3>
            </div>
        </div>
      <hr class="mt-1">
    `;
}

function displayReviews(div, productCode) {
    let index = products.findIndex(function(product) {
        return product.cod === productCode;
    });

    if (products[index].reviews.length > 0) {
        areReviews = true;
        let elem = `
            <div class="row">
                <div id="review_list" class="col-12">
        `;

        for (let i = 0; i < products[index].reviews.length; ++i) {
            elem += `
                <h5><a href="#">${products[index].reviews[i].author}</a></h5>
                <h6>${products[index].reviews[i].review}</h6>
                <hr>
            `;
        }

        div.innerHTML += elem;
    } else {
        areReviews = false;
        div.innerHTML += `
            <div class="row">
                <div id="review_list" class="col-12">
                    <h4 class="text-center">Sin reseñas</h4>
                </div>
            </div>
        `;
    }

    div.innerHTML += `
            </div>
        </div>
    `;
}

function displayNewReviewBox(div) {
    div.innerHTML += `
        <div class="row mt-4">
            <div class="col-12">
            <h3 class="text-center">Emitir reseña</h3>
            <div class="form-group">
                <label>Nombre:</label>
                <input id="author" class="form-control" type="text">
            </div>
            <div class="form-group">
                <label>Mensaje:</label>
                <textarea id="review" class="form-control" rows="3"></textarea>
            </div>
            <div class="row">
                <div class="col-9"></div>
                <div class="col-3">
                <button class="btn btn-block btn-success btn-outline-success" onclick="addReview()">Enviar reseña</button>
                </div>
            </div>
            </div>
        </div>
    `;

}

function addProduct(productID) {
    let shoppingCart = JSON.parse(sessionStorage.getItem(CART_KEY));
    let quantity = parseInt(document.getElementById("quantity").value);
    let index = shoppingCart.products.findIndex(function(product) {
        return product.info.cod === products[productID].cod;
    });

    if (index == -1)
        shoppingCart.products.push({
            quantity: 1,
            info: products[productID]
        });
    else
        shoppingCart.products[index].quantity += quantity;
    
    shoppingCart.size += quantity;
    document.getElementById("cart").innerText = shoppingCart.size;
    sessionStorage.setItem(CART_KEY, JSON.stringify(shoppingCart));
}

function addReview() {
    let reviewList = document.getElementById("review_list");

    if (!areReviews) {
        areReviews = true;
        reviewList.innerHTML = "";
    }

    reviewList.innerHTML += `
        <h5><a href="#">${document.getElementById("author").value}</a></h5>
        <h6>${document.getElementById("review").value}</h6>
        <hr>
    `;
}