'use strict'

// JSON file url
let jsonUrl = 'https://gist.githubusercontent.com/jorcebs/57038c193314a58260633c7cc89e5e47/raw/58f59d226441cf3545900a4d54faec78c744f053/import.json';

// Executed when index.html page is ready
function onIndexLoad() {

    // Initialises window.name if it hasn't been set
    if (!window.name) window.name = '[]';

    // Materialize JavaScript component initialization
    $('.parallax').parallax();

    // Used to alternate between the two responsive product columns
    let columnSwitch = 1;

    // Reads json on server
    $.getJSON(jsonUrl, function (json) {

        // For each product in json...
        for (let i = 0; i < json.length; i++) {

            // Gets product info
            let id = json[i].id;
            let name = json[i].name;
            let description = json[i].description;
            let price = json[i].price;

            // Creates html tags with product info
            let html = `<div class='horizontal hoverable card'>
                    <div class='valign-wrapper card-image'>
                        <img src='img/${id}.jpeg'>
                    </div>
                    <div class='card-stacked'>
                        <div class='card-content'>
                            <h5>${name}</h5>
                            <p>${description}</p>
                            <h4>$ ${price}</h4>
                        </div>
                        <div class='card-action'>
                            <a href='product.html?id=${id}'>Comprar</a>
                        </div>
                    </div>
                </div>`;

            // Appends product to responsive columns
            if (columnSwitch > 0)
                $('.product-col:first').append(html);
            else
                $('.product-col:eq(1)').append(html);

            // Alternates next column
            columnSwitch *= -1;

        }
    });
}

// Executed when product.html page is ready
function onProductLoad() {

    // Initialises window.name if it hasn't been set
    if (!window.name) window.name = '[]';

    // Materialize JavaScript component initialization
    $('textarea').characterCounter();

    // Gets id from url
    let id = getParam('id');

    // If product id hasn't been set, sets it to 1
    if (!id) id = 1;

    // Reads json on server
    $.getJSON(jsonUrl, function (json) {

        // Finds product with id
        let product = json.find(item => item.id == id);

        // If product was found, display its info
        if (product) {

            // Displays product info on page
            $('#product-id').val(product.id);
            $('#product-name').html(product.name);
            $('#product-description').html(product.description);
            $('#product-price').html('$ ' + product.price);
            $('#product-image').attr('src', 'img/' + product.id + '.jpeg');

            // Gets products in cart
            let cart = JSON.parse(window.name);

            // If the product exists in the cart already, sets input quantity
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id == product.id) {
                    $('#quantity').val(cart[i].quantity);
                    break;
                }
            }

            // If there are any reviews...
            if (product.reviews.length > 0) {

                // Displays review section title
                let h4 = `<h4 class='center'>Reseñas</h4>`;
                $('#reviews').html(h4);

                // For each product review...
                for (let i = 0; i < product.reviews.length; i++) {

                    // Gets review info
                    let user = product.reviews[i].user;
                    let review = product.reviews[i].review;

                    // Creates html tags with review info
                    let html = `<a href=''>
                                <h6>${user} :</h6>
                            </a>
                            <blockquote>
                                <p>${review}</p>
                            </blockquote>`;

                    // Appends review to div
                    $('#reviews').append(html);

                }
            }
        }
        // If product wasn't found, display error message and overrides page elements
        else {
            let html = `<div class='center container'>
                            <h1>Product not found</h1>
                        </div>`;
            $('main').html(html);
        }
    });
}

// Executed when cart.html page is ready
function onCartLoad() {

    // Initialises window.name if it hasn't been set
    if (!window.name) window.name = '[]';

    // Gets products in cart
    let cart = JSON.parse(window.name);

    // If there is any product in the cart
    if (cart.length > 0) {

        // Reads json on server
        $.getJSON(jsonUrl, function (json) {

            // For each product in cart...
            for (let i = 0; i < cart.length; i++) {

                // Finds product with id
                let product = json.find(item => item.id == cart[i].id);

                // Gets product info
                let id = cart[i].id;
                let name = product.name;
                let quantity = cart[i].quantity;
                let price = (product.price * quantity).toFixed(2);

                // Creates html tags with product info
                let html = `<tr>
                        <td>
                            <a href='product.html?id=${id}'>
                                <img src='img/${id}.jpeg'>
                            </a>
                        </td>
                        <td>
                            <a href='product.html?id=${id}'>
                                <p>${name}</p>
                            </a>
                        </td>
                        <td class='quantity'>${quantity} botella(s)</td>
                        <td class='price'>$ ${price}</td>
                        <td>
                            <a href='javascript:removeProduct(${id})'>
                                <i class='black-text material-icons'>delete</i>
                            </a>
                        </td>
                        <td class='p-right'>
                            <a href='product.html?id=${id}'>
                                <i class='black-text material-icons'>edit</i>
                            </a>
                        </td>
                    </tr>`;

                // Appends product to table
                $('tbody').append(html);

            }
        });
    }
    // If there are no products in the cart
    else {
        let html = `<div class='center container'>
                        <h1>Cart is empty</h1>
                    </div>`;
        $('main').html(html);
    }
}

// Adds product to cart. If the product was already added, updates the quantity
function addProduct() {

    // Gets JSON from browser storage
    let cart = JSON.parse(window.name);

    let id = $('#product-id').val();
    let quantity = $('#quantity').val();

    // If the product exists in the cart already, delets the products and refreshes cart variable
    if (cart.some(item => item.id == id)) {
        removeProduct(id);
        cart = JSON.parse(window.name);
    }

    // Adds new product to cart
    let adding = { "id": id, "quantity": quantity };
    cart[cart.length] = adding;

    // Saves cart
    window.name = JSON.stringify(cart);

}

// Removes product from JSON
function removeProduct(id) {

    // Gets JSON from browser storage
    let cart = JSON.parse(window.name);

    // Finds product and delets it
    for (let i = cart.length - 1; i >= 0; i--) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
            break;
        }
    }

    // Saves cart
    window.name = JSON.stringify(cart);

    // Reloads cart
    location.reload();

}

// Gets param from url
function getParam(name) {

    let url = window.location.search.substring(1);
    let urlVariables = url.split('&');

    for (let i = 0; i < urlVariables.length; i++) {

        let urlParamName = urlVariables[i].split('=');

        if (urlParamName[0] == name)
            return urlParamName[1];

    }
}