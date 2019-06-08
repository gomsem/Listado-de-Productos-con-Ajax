$(document).ready(function () {
    $('#mostrar').click(function(){
        getProduct();
    });

    //Llamando a los prodctos a tomar de la API
    function getProduct(){
        $.ajax({

            url: "https://mini-shop-rg.herokuapp.com/products",
            type: "GET",
            dataType: "json",

            success: function(despliegue){
                var listProduct = $('#container');
                var alistProduct = despliegue;

                console.log(despliegue);
                for(var i = 0; i <= alistProduct.length; i++){
                    var product = alistProduct[i];
                    listProduct.append(`
                        <div class='card-product'><br>
                            <img src=${product.image}><br>
                            <p><b>Nombre del producto: </b> <i>${product.name}</i></p>
                            <p><b>Precio: </b> <i>$${product.price}</i></p>
                            <p><b>Descripción del producto: </b> <i>${product.description}</i></p>
                        </div>
                    `);
                }
            },
            error: function(error){
                console.log(error);
            },
            complete: function(complete){
                console.log(complete);
            }
        });
    }
});