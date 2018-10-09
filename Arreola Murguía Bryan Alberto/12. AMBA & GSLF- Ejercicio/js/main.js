$(document).ready(function () {

    //Removing "active" class from nav items
    $("li.nav-item").on("click", function (event) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active').siblings().removeClass('active');
        }
    });

    //Function to poputale index.html from MyJSON products
    $(function () {
        $.ajax({
            url: "https://api.myjson.com/bins/12swdg",
            success: function (response) {
                console.log(response.product);
                var json = response.product;
                var html;
                for (var key in json) {
                    if (json.hasOwnProperty(key)) {
                        //console.log(json[key].imgLocation);
                        //console.log(key);
                        html += '<div class="product-container" id="' + key + '">' +
                            '<div class="add-cart">' +
                            '<a id="buyProduct" href="#">' +
                            '<i class="material-icons">' +
                            'add_shopping_cart' +
                            ' </i>' +
                            '</a>' +
                            '</div>' +
                            '<img class="product-img" src="' + json[key].imgLocation + '">' +
                            '<p class="product-title"><a href="#">' + json[key].title + '</a></p>' +
                            '<div class="row">' +
                            '<div class="column">' +
                            '<p class="product-price">$' + json[key].price + '</p>' +
                            ' </div>' +
                            '<div class="column">' +
                            '<p class="product-rate">' + json[key].review + '/5</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                    }
                }
                $(".container-fluid").append(html);
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log('Error: ' + errorMessage);
            }
        });
    });

    //Add product to cart
    $("#buyProduct").on("click", function(){
    });

    //Function to notify client products were bought
    $("#buy").on("click", function () {
        let html = '<div class="alert alert-success" role="alert">' +
            '<h1>Has adquirido tus productos, estos deberán estar en camino dentro de las próximas 24hrs.</h1>' +
            '</div>'+
            '<a href="./index.html">Volver al inicio</a>';
        $(".cart-container").html(html);
    });

});