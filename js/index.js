

$(document).ready(function() {
    $.ajax({
        url: 'carousel-blog.html',
        success: function(data) {
            $('#carouselContainer').html(data);
            $('#carouselBlog').carousel();
        }
    });

    $.ajax({
        url: 'carousel-facturacion.html',
        success: function(data) {
            $('#carouselContainer1').html(data);
        }
    });

    
    $.ajax({
        url: 'carousel-plsql.html',
        success: function(data) {
            $('#carouselContainer2').html(data);
        }
    });

    $.ajax({
        url: 'carousel-javaee8_pedidos.html',
        success: function(data) {
            $('#carousel-javaee8_pedidos').html(data);
        }
    });

    
});

