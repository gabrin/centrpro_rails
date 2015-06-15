(function($) {



  // список методов нашего плагина



  var methods = {

    init : function( options ) {
// сюда можно помещать инициализацию плагина. в нашем случае



    },

    services : function () {
    	$("head").append("<link href='/css/menu.css' rel='Stylesheet' type='text/css' />");

			var menu = "<div id='services'>";
            menu    += "<a href='http://localhost:5000' class='service_link left' data-page='centrpro'>CentrPRO</a>";
            menu    += "<a href='http://forum.centrpro.com' class='service_link left forum' data-page='forum'>Форум</a>";
            menu    += "<a href='http://git.centrpro.com' class='service_link left git' data-page='git'>Гит</a>";
            menu    += "<a href='register' class='service_link right'>Регистрация</a><a href='login' class='service_link right'>Вход</a>";
            menu    += "</div>";


 			$(this).append(menu);
var path = window.location.href;
var parts = location.hostname.split('.');
var subdomain = parts.shift();
var upperleveldomain = parts.join('.');

$('.service_link').each(function() {
    if (this.attr ("data-page") === subdomain) {
        $(this).addClass('active');
    }
});
    }

  };



// "регистрируем" наш плагин в пространстве имен jQuery.

  $.fn.services_menu = function( method ){

    if ( methods[method] ) {
      methods.init.apply( this, arguments );
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else {
      $.error( 'Метод' +  method + ' не существует!' );
    }
  };



})( jQuery );
$("#s_menu").services_menu("services");

