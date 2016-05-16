angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('categoriasControl', function($scope,$location,$http) {

          var token = "io-gluk@fct%vusb";

            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/ListadoCategorias",
            data: {
                    token: token
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
                $scope.categorias = data.datos;
               // console.log(data.datos);

            });




  $scope.lista = function(id) {


    localStorage.setItem("id_categoria", id);
    $location.url("app/profile");

  }

    $scope.todos = function() {


    $location.url("app/world");

  }

})

.controller('telefonosControl', function($scope,$location,$http) {

  $id_cat = localStorage.getItem("id_categoria");
 

  //console.log($id_cat );

            var token = "io-gluk@fct%vusb";

            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/InfoCategorias",
            data: {
                    token: token,
                    id: $id_cat
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
                $scope.telefonos1 = data.datos;
                //console.log(data);

            });





  $scope.detail = function(id) {

    //console.log(id);
    localStorage.setItem("id_telefono", id);
    $location.url("app/about");


  }

})

.controller('detallesControl', function($scope,$location,$http) {

   $id_tel = localStorage.getItem("id_telefono");


   window.localStorage.clear();


            var token = "io-gluk@fct%vusb";

            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/TelefonosCategorias",
            data: {
                    token: token,
                    id: $id_tel
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
               $scope.numeros = data.datos;

               console.log(data.datos);

               localStorage.setItem("id_telefono", data.datos[0].id_persona);
             

            });







})

.controller('todosControl', function($scope,$location,$http) {


    $http.get('http://directorio.sigtics.org/funciones-movil/InfoCategoriasTodas').
      then(function(response) {
 
            $scope.categoriasTodas = response.data;
            console.log(response.data);
     })


    $scope.detail1 = function(id) {

    //console.log(id);
    localStorage.setItem("id_telefono", id);
    $location.url("app/about");


  }


})


.controller('correosControl', function($scope,$http) {

   $id_tel = localStorage.getItem("id_telefono");
   console.log($id_tel);
   window.localStorage.clear();




            var token = "io-gluk@fct%vusb";

            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/CorreosCategorias",
            data: {
                    token: token,
                    id: $id_tel
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
               $scope.correo = data.datos;

               console.log(data);

               localStorage.setItem("id_telefono", data.datos[0].id_persona);
             

            });


})

.controller('infoControl', function($scope,$http) {

     $id_per = localStorage.getItem("id_telefono");
     window.localStorage.clear();

     //console.log($id_per);


            var token = "io-gluk@fct%vusb";

            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/DatosCategorias",
            data: {
                    token: token,
                    id: $id_per
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
               $scope.datos = data.datos;

               //console.log(data);

               localStorage.setItem("id_telefono", data.id_persona);
               //console.log(data.id_persona);
             

            });


})



.controller('registrarControl', function($scope,$http,$location) {

    $http.get('http://directorio.sigtics.org/funciones-movil/ComboCategorias').
      then(function(response) {
 
            $scope.categorias = response.data;
            //console.log(response.data);
     })

    $http.get('http://directorio.sigtics.org/funciones-movil/ComboProfesiones').
      then(function(response) {
 
            $scope.profesion = response.data;
            //console.log(response.data);
     })

    $http.get('http://directorio.sigtics.org/funciones-movil/ComboTipo').
      then(function(response) {
 
            $scope.tipo = response.data;
            //console.log(response.data);
     })

         $scope.registrar = function () {

          var nombre = document.getElementById("nombre").value;
          var categoria = document.getElementById("categoria").value;
          var profesion1 = document.getElementById("profesion1").value;
          var direccion = document.getElementById("direccion").value;
          var pagina = document.getElementById("pagina").value;
          var descripcion = document.getElementById("descripcion").value;
          var email1 = document.getElementById("email1").value;
          var email2 = document.getElementById("email2").value;
          var tipotel1 = document.getElementById("tipotel1").value;
          var tel1 = document.getElementById("tel1").value;
          var tipotel2 = document.getElementById("tipotel2").value;
          var tel2 = document.getElementById("tel2").value;

          //console.log(nombre + categoria + profesion1 + direccion + pagina + descripcion + email1 + email2 + tipotel1 + tel1 + tipotel2 + tel2);

           var token = "io-gluk@fct%vusb";

            var request = $http({
                method: "post",
                url: "http://directorio.sigtics.org/funciones-movil/RegistrarPersona",
                data: {
                    nombre: nombre,
                    categoria:categoria,
                    profesion:profesion1,
                    direccion:direccion,
                    pagina:pagina,
                    descripcion:descripcion,
                    email1:email1,
                    email2:email2,
                    tipotel1:tipotel1,
                    tel1:tel1,
                    tipotel2:tipotel2,
                    tel2:tel2,
                    token: token
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            request.success(function (data) {

              //console.log(data);

              if (data.error = "false"){
                //console.log ("aqui cambia");

                localStorage.setItem("per_id", data.id_persona);
                localStorage.setItem("img", data.imagen);
                //console.log(data.imagen);
                //console.log(data.id_persona);
                  $location.url("app/imagen");

              }
              else
              {
         

                alertify.logPosition("top right");
                alertify.error("faltan datos por llenar , por favor revisar");
              }
               

            });
              

           
    }

})

.controller('imagenControl', function($scope,alertify,$location,$upload,$timeout) {

     $id_pers = localStorage.getItem("per_id");
     $imgp = localStorage.getItem("img");

     window.localStorage.clear();



      //document.getElementById("nombre_usuario").innerHTML =localStorage.getItem("nombre_user");
    //$('#imgper').attr("src",$imgp);
    document.getElementById("imgper").src = $imgp;
     //console.log($id_pers);
     //console.log($imgp);

     $scope.clickUpload = function(){

     // console.log("llega");

   ionic.trigger('click', { target: document.getElementById('i_file') });


   }

   $scope.uploadResult = [];
   $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
     alertify.logPosition("top right");
      alertify.success("Enviando Archivo");

    for (var i = 0; i < $files.length; i++) {
      var $file = $files[i];
      $upload.upload({
        url: 'http://directorio.sigtics.org/funciones-movil/FotoTelefono',
        data: {
                    id:$id_pers

             },
        file: $file,
        progress: function(e){
         
        }
      }).then(function(response) {
        // file is uploaded successfully
           

          console.log(response);
         $location.url("app/random");


      }); 
    }
  }




})

.controller('aboutControl', function($scope,$http) {

  $id_tel = localStorage.getItem("id_telefono");
  var token = "io-gluk@fct%vusb";


            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/TelefonosCategorias",
            data: {
                    token: token,
                    id: $id_tel
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
               $scope.numeros = data.datos;

               console.log(data.datos);             

            });


            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/CorreosCategorias",
            data: {
                    token: token,
                    id: $id_tel
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
               $scope.correo = data.datos;
             

            });

            var request = $http({
            method: "post",
            url: "http://directorio.sigtics.org/funciones-movil/DatosCategorias",
            data: {
                    token: token,
                    id: $id_tel
                },

                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
               
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.success(function (data) {
                
               $scope.datos = data.datos;


            });








})

.controller('contactanosControl', function($scope,$http) {

  $scope.contacto = function (){

    alertify.logPosition("bottom right");
    alertify.success("Enviando mensaje, espere por favor");

          var nombre = document.getElementById("nombre").value;
          var descripcion = document.getElementById("descripcion").value;
          var email1 = document.getElementById("email1").value;
          var token = "io-gluk@fct%vusb";

          console.log(email1);

            var request = $http({
                method: "post",
                url: "http://directorio.sigtics.org/funciones-movil/Contactenos",
                data: {
                    nombre: nombre,
                    descripcion:descripcion,
                    email1:email1,
                    token: token
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            request.success(function (data) {

              //console.log(data);

              if (data.error = "false"){
                //console.log ("aqui cambia");

                console.log(data);

                alertify.logPosition("top right");
                alertify.success(data.mensaje);

                  document.getElementById("nombre").value = "";
                  document.getElementById("descripcion").value = "";
                  document.getElementById("email1").value = "";

                //console.log(data.imagen);
                //console.log(data.id_persona);
   

              }
              else
              {

                alertify.logPosition("top right");
                alertify.error("faltan datos por llenar , por favor revisar");
              }
               

            });



  }

          



})

.controller('acercadeControl', function($scope) {

    $scope.contactoC = [
    {direccion: '321 865 1102', tipo: 'Movil', img: 'img/Mobile-icon.png' },
    {direccion: 'sigtics@gmail.com', tipo: 'Email', img: 'img/email.png'}
    ];

    $scope.desarrollo = [
    {nombre: 'Jesson Ember Bejarano Mosquera', numero: '311 785 7328', img: 'img/ember.jpg' },
    {nombre: 'Fabio Garcia Alvarez', numero: '312 213 7514', img: 'img/fabio.jpg'}
    ];

    $scope.bd = [
    {nombre: 'Harlinton Palacios Mosquera', numero: '314 753 0888', img: 'img/harlinton.jpg' }
    ];
    $scope.apoyo = [
    {nombre: 'Katerine Moya Pino', numero: '321 879 2410', img: 'img/kt.jpg' }
    ];
    $scope.analistas = [
    {nombre: 'Danny Jhuritza Córdoba Perea', numero: '321 867 8665', img: 'img/danny.jpg' },
    {nombre: 'Jorge Luis González Mosquera', numero: '320 720 9968', img: 'img/jorge.jpg' },
    {nombre: 'Jorge León Quejada Palacios', numero: '320 612 6966', img: 'img/leon.jpg' },
    {nombre: 'Yesid Rentería Rodríguez', numero: '311 799 2460', img: 'img/yezo.png' }
    ];

})

.controller('webControl', function($scope) {

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
