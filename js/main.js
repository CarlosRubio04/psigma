// Cargar
function cargar(){
  $('#loader').fadeIn();
}
// Descargar
function descargar(){
  $('#loader').fadeOut();
}

var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById('burguer-button');
var $burguerButton2 = document.getElementById('burguer-button2');
var $close = document.getElementById('close');
var $menu = document.getElementById('menu');

function toggleMenu(){
  $menu.classList.toggle('active-menu');
};

function closeMenu(){
  $menu.classList.remove('active-menu');
};

function mediaQuery() {
  if (consulta.matches) {
          // si se cumple hagamos esto
          console.log('se cumplió la condicion');
          $burguerButton.addEventListener('touchstart', toggleMenu);
          $burguerButton2.addEventListener('touchstart', toggleMenu);
          $close.addEventListener('touchstart', closeMenu);
        } else {
          $burguerButton.addEventListener('click', toggleMenu);
          $burguerButton2 .addEventListener('click', toggleMenu);
          $close.addEventListener('click', closeMenu);
          // si no se cumple hagamos esto
          console.log('no se cumplió la condicion');
        }
      }
      mediaQuery();

// carga asincronica de las imagenes
var bLazy = new Blazy({ 
  selector: '.lazyImg' // all images
});

// Bx Slider
$(document).ready(function(){
  descargar();
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 370,
    slideMargin: 15
  });
});

// Validacion del formulario
// Validacion del formulario 1
$('#contacto').validate(  {
  rules: {
    nombre: {
      required: true,
      minlength: 5
    },
    telefono: {
      required: true,
      minlength: 7
    },
    correo: {
      email: true,
      required: true,

    },
    cargo: {
      required: true,
    },
    empleados: {
      required: true,
    },
    empresa: {
      required: true,
    }
  },
  messages: {
    nombre: {
      required: "Por favor escribe tu nombre",
      minlength: "Tu nombre es demasiado corto"
    },
    telefono: {
      required: "Por favor escribe tu teléfono",
      minlength: "Tu teléfono es demasiado corto"
    },
    correo: {
      required: "Por favor escribe tu E-mail",
      minlength: "Escribe un E-mail valido"
    },
    cargo: {
      required: "Por favor completa este campo",
    },
    empleados: {
      required: "Por favor completa este campo",
    },
    empresa: {
      required: "Por favor completa este campo",
    }

  },
  submitHandler: function(form){
    cargar();
    $.post('includes/validation.php',$('#contacto').serialize())
    .done(function(data){
      $('.form-control').val('');
      descargar();
      //bootbox.alert(data, function() {console.log("Alert Callback");});
      window.location.href = "?content=gracias";
    })
  }
});
// Validacion del formulario 1
$('#contacto2').validate(  {
  rules: {
    nombre: {
      required: true,
      minlength: 5
    },
    telefono: {
      required: true,
      minlength: 7
    },
    correo: {
      email: true,
      required: true,

    },
    cargo: {
      required: true,
    },
    empleados: {
      required: true,
    },
    empresa: {
      required: true,
    }
  },
  messages: {
    nombre: {
      required: "Por favor escribe tu nombre",
      minlength: "Tu nombre es demasiado corto"
    },
    telefono: {
      required: "Por favor escribe tu teléfono",
      minlength: "Tu teléfono es demasiado corto"
    },
    correo: {
      required: "Por favor escribe tu E-mail",
      minlength: "Escribe un E-mail valido"
    },
    cargo: {
      required: "Por favor completa este campo",
    },
    empleados: {
      required: "Por favor completa este campo",
    },
    empresa: {
      required: "Por favor completa este campo",
    }

  },
  submitHandler: function(form){
    cargar();
    $.post('includes/validation.php',$('#contacto2').serialize())
    .done(function(data){
      $('.form-control').val('');
      descargar();
      //bootbox.alert(data, function() {console.log("Alert Callback");});
      window.location.href = "?content=gracias";
    })
  }

});