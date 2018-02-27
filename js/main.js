var api_key = "AIzaSyABvdDryP51v2889Um8K065NKypS0KxVzo";

function initMap() {
  var latLong = {
    lat: 40.4122576,
    lng: -3.7182309
  }
  var map = new google.maps.Map(
    document.getElementById('mapa'),
    {
    'center': latLong,
    'zoom': 15,
    'mapTypeId': google.maps.MapTypeId.ROADMAP
    }
  );
  var marker = new google.maps.Marker(
    {
      position: latLong,
      map: map,
      tittle: "GDLWEBCAMP"
    }
  )
  var contenido = '<h2>GDLWEBCAMP</h2>' +
                  '<p>Del 10 al 12 de diciembre</p>' +
                  '<p>¡¡Visítanos!!</p>';
  var informacion = new google.maps.InfoWindow(
    {
      content: contenido
    }
  );

  marker.addListener ('click', function(){
    informacion.open(map, marker);
  });
}//initMap

(function(){
  "use strict";
  var regalo = document.getElementById ('regalo');
  document.addEventListener('DOMContentLoaded', function (){
    //Campos Datos usuarios
    var nombre = document.getElementById ('nombre');
    var apellido = document.getElementById ('apellido');
    var email = document.getElementById ('email');

    //Campos pases
    var pase_dia = document.getElementById ('pase_dia');
    var pase_completo = document.getElementById ('pase_completo');
    var pase_dosdias = document.getElementById ('pase_dosdias');

    //Botones y div
    var calcular = document.getElementById ('calcular');
    var errorDiv = document.getElementById ('error');
    var botonRegistro = document.getElementById ('btnRegistro');
    var lista_productos = document.getElementById ('lista-productos');
    var suma = document.getElementById('suma-total');

    //extras
    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');

    if (document.getElementById ('calcular')){
    calcular.addEventListener('click', calcularMontos);
    pase_dia.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);

    nombre.addEventListener ('blur', validarCampos);
    apellido.addEventListener ('blur', validarCampos);
    email.addEventListener ('blur', validarCampos);
    email.addEventListener ('blur', validarEmail);

    function validarCampos(){
      if (this.value == ""){
        errorDiv.style.display = "block";
        errorDiv.innerHTML ="Este campo es obligatorio";
        this.style.border = "1px solid red";
        errorDiv.style.border = "1px solid red";
      }else{
        errorDiv.style.display = "none";
        this.style.border = "1px solid #cccccc";
      }
    };//validarCampos

    function validarEmail(){
      if (this.value.indexOf("@") > -1){
        errorDiv.style.display = "none";
        this.style.border = "1px solid #cccccc";
      }else{
        errorDiv.style.display = "block";
        errorDiv.innerHTML ="Debe tener al menos una @";
        this.style.border = "1px solid red";
        errorDiv.style.border = "1px solid red";
      }
    }//validarEmail

    // Funcion que calcula la compra y la muestra en la pagina
    function calcularMontos (event){
      event.preventDefault();
      if (regalo.value === ''){
        regalo.focus();
        alert ("Debes elegir un regalo")
      }
      else{
        var ticketsDia = parseInt (pase_dia.value, 10) || 0,
            ticketsDosDias = parseInt (pase_dosdias.value, 10) || 0,
            ticketsPaseCompleto = parseInt (pase_completo.value, 10) || 0,
            cantCamisas = parseInt (camisas.value, 10) || 0,
            cantEtiquetas = parseInt (etiquetas.value, 10) || 0;

        var totalPagar = (ticketsDia * 30)
        totalPagar += (ticketsDosDias * 45)
        totalPagar += (ticketsPaseCompleto * 50);
        totalPagar += ((cantCamisas * 10) * .93);
        totalPagar += (cantEtiquetas * 2);

        var listadoProductos = new Array();

        if (ticketsDia >=1){
          listadoProductos.push (ticketsDia + " Pases por día");
        }
        if (ticketsDosDias >=1){
          listadoProductos.push (ticketsDosDias + " Pases por 2 días");
        }
        if (ticketsPaseCompleto >= 1){
          listadoProductos.push (ticketsPaseCompleto + " Pases Completos");
        }
        if (cantCamisas >= 1){
          listadoProductos.push (cantCamisas + " Camisetas");
        }
        if (cantEtiquetas >= 1){
          listadoProductos.push (cantEtiquetas + " Paquetes de Etiquetas");
        }

        lista_productos.style.display = "block";
        lista_productos.innerHTML ='';
        for (var i = 0; i < listadoProductos.length; i++){
          lista_productos.innerHTML += listadoProductos[i] + '<br/>';
        }
        suma.innerHTML = "$ " + totalPagar.toFixed(2);
      }
    }//calcularMontos

    function mostrarDias(){
      var ticketsDia = parseInt (pase_dia.value, 10) || 0,
          ticketsDosDias = parseInt (pase_dosdias.value, 10) || 0,
          ticketsPaseCompleto = parseInt (pase_completo.value, 10) || 0;
      var diasElegidos = new Array();

      if (ticketsDia > 0){
        diasElegidos.push ("viernes");
      }
      if (ticketsDosDias > 0){
        diasElegidos.push ("viernes", "sabado");
      }
      if (ticketsPaseCompleto > 0){
        diasElegidos.push ("viernes", "sabado", "domingo");
      }
      for (var i = 0; i < diasElegidos.length; i++){
        document.getElementById(diasElegidos[i]).style.display="block";
      }
    }// mostrarDias
    }
  });//DOM Content Loaded
})();

//parte de jQuery
$(function (){

  //lettering para encabezado
  $('.nombre-sitio').lettering();

  //Menu fijo
  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > windowHeight){
      $('.barra').addClass('fixed');
      $('body').css({'margin-top': barraAltura+'px'});
    }else{
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top': '0px'});
    }
  });

  //Menu responsivo
  $('.menu-movil').on ('click', function(){
    $('.navegacion-principal').slideToggle();

  });


  //Programa de Conferencias
  $('.programa-evento .info-cursos:first').show();
  $('.menu-programa a:first').addClass('activo');
  $('.menu-programa a').on ('click', function(){
    $('.menu-programa a').removeClass ('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    return false;
  });

  //Animaciones para el contador
  var resumenLista = jQuery('.resumen-evento');
  if (resumenLista.length > 0){
    $('.resumen-evento').waypoint(function(){
      $('.resumen-evento li:nth-child(1) p').animateNumber({number:6}, 1200);
      $('.resumen-evento li:nth-child(2) p').animateNumber({number:15}, 1000);
      $('.resumen-evento li:nth-child(3) p').animateNumber({number:3}, 2000);
      $('.resumen-evento li:nth-child(4) p').animateNumber({number:9}, 1500);
    },{
      offset: '60%'
    });
  }

  //animaciones para cuenta regresiva
  $('.cuenta-regresiva').countdown('2018/12/10 09:00:00', function(event){
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));

  });
});
