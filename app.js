// SELECTORES CON JQUERY

$(document).ready(function () {
    $("h1").html("Práctica con JQUERY titulo modificado con una etiqueta html");
    $("#param").html("Parrafo modificado con un id");
    $(".bg-primary").html("Parrafo modificado con una clase");
    
    $(".container h3:last").html("Cambiar texto del h3"); // first.

    // console.log("funcionando");
    // document.querySelector(".bg-primary").innerHTML = "Hola";
});

// DOM (MANIPULANDO EL DOCUMENTO) CON JQUERY

$(document).ready(() => {
    $("h2").addClass("text-danger");
    $("em").removeClass("text-primary");
    
    $("#content").append("<p>Va al final</p>");
    $("#content").prepend("<p>Va al inicio</p>");
    
    $("#content p:first").addClass("text-success");
    $(".text-success").before("<b>hola</b>");
    $(".text-success").after("<i>bye</i>");

    $("#btn1").css("font-weight", "bold");
    $("#btn1").css({width: "200px", margin: "30px"});

    $("#content p:last").remove(); // Lo elimina del html.
    $("#content i").hide(); // Le aplica un display: none.

    // Agregar valores a los atributos.
    $("img").attr("src", "https://jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg");

    // Agregar multiples valores. tambien se puede aplicar al width y aplicar un last o first.
    $("img").attr({src: "https://jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-succinctly.jpg", alt: "Libro JQUERY"});
});

// EVENTOS CON JQUERY

$(document).ready(() => {
    let parrafo = $("#res p");
    
    $("#btn2").click(() => {
        $(parrafo).addClass("display-4");
    });

    $("#btn3").click(() => {
        $(parrafo).removeClass("display-4");
    })

    // Alternativa del click
    $("#btn4").on("click", () => {
        $(parrafo).toggleClass("display-4")
    })

    let input = $("#input");
    let content = $("#name");

    input.keyup(() => {
        content.html(input.val());
        
        if(input.val() === "") {
            content.html("Hola, Esperando...")
        }
    });
});

// FORM.

$(document).ready(() => {
    $("#form").submit((ev) => {
        ev.preventDefault();
        let valor = $("#email").val();
        console.log(valor);
    })
})

// EFECTOS CON JQUERY

$(document).ready(function() {
    var ocultar = $("#ocultar");
    var mostrar = $("#mostrar");
    var toggle = $("#toggle");
    var elemento = $("#elemento");

    ocultar.click(function() {
        elemento.hide(1000); // display: none; se oculta.
    });

    mostrar.click(function() {
        elemento.show(1000); // Se muestra.
    });

    toggle.click(function() {
        elemento.toggle(1000); // Se oculta y se muestra.
    });

    // También exite stop para detener con anticipación una animación.
});

// ANIMATE.

$(document).ready(() => {
    $("#mover").click(() => {
        $("#text").animate({
            left: "250px",
            width: "200px", // +=200px Obtiene el tam actual + los 200px;
            opacity: "0.5"
        }, 3000, () =>{
            $("#text").animate({
                left: "500px",
                width: "+=500px",
                opacity: "1"
            }, 1000)
        })
    })
})

// Animate se le envia un obj de styles para animar, el tiempo y otra func para agregar otra animación.


// Api.

function getQuotes() {
  $.ajax({
    url: "https://www.breakingbadapi.com/api/quotes", // URL
    type : 'GET', // Especifica si será una petición POST o GET
    dataType : 'json', // El tipo de información que se espera de respuesta
    success: function(respuesta) { 
        console.log(respuesta);
    },
    error: function(error) {
      console.log("Error:", error.statusText);
    }
  });
}

getQuotes();

// Url: indica la url donde enviaremos la petición.
// Type: especifica el tipo de petición (GET o POST).
// Data: datos que enviamos junto a la petición. Por ejemplo si el tipo es ‘get’, es equivalente a los parámetros que le pasaríamos a la url (?nombre=Luis&apellidos=lopez).
// DataType: tipo de datos que esperamos en la repuesta del servidor (XML, HTML, JSON, SCRIPT).
// Async: Para elegir si queremos una petición síncrona o asíncrona.