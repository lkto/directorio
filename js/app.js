// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic.ion.headerShrink','ngAlertify','angularFileUpload'])

.run(function($ionicPlatform,$rootScope,$ionicHistory,$ionicModal,$timeout,$location,$ionicPopup) {
	
 $rootScope.setting=[{title:"Random image"},{title:"World image"},{title:"Friends image"},{title:"Notification allert"}]	

$rootScope.activeTab=function(index){
	$rootScope.color_tab=index;
	
	}

$rootScope.goto=function(url,type){
	$location.path(url);
	if(type==true){
//	$window.location.reload(true)
	}
	}
$rootScope.chang_tab=1;

 $rootScope.myGoBack = function() {
    $ionicHistory.goBack();
  }
  
  $rootScope.forget_password=function (){	
    $ionicPopup.show({
        template: 'Enter your email address below.<label class="item item-input" style="height: 34px; margin-top: 10px;">'+
                '<input  type="email"  /></label>',
        title: 'Forget Password',
        subTitle: ' ',
        scope: $rootScope,
        buttons: [{text: '<b>Send</b>',type: 'button-positive'}, { text: 'Cancel' , type: 'button-positive'} ] });
  };
$rootScope.world=[{id:"1",img:"img/006.png",title:"La tour Eiffel Eiffel Tower Paris France"},
{id:"2",img:"img/005.png",title:"new zealand nature landscapes valley hills mountaisn fields sky clouds trees roads wallpaper"},{id:"3",img:"img/001.png",title:"nature landscapes valley hills mountaisn fields "},{id:"1",img:"img/006.png",title:"La tour Eiffel Eiffel Tower Paris France"},{id:"2",img:"img/005.png",title:"new zealand nature landscapes valley hills mountaisn fields sky clouds trees roads wallpaper"},{id:"3",img:"img/001.png",title:"nature landscapes valley hills mountaisn fields "},{id:"1",img:"img/006.png",title:"La tour Eiffel Eiffel Tower Paris France"},{id:"2",img:"img/005.png",title:"new zealand nature landscapes valley hills mountaisn fields sky clouds trees roads wallpaper"},{id:"3",img:"img/001.png",title:"nature landscapes valley hills mountaisn fields "}]	

$rootScope.image=[{id:"1",img:"img/002.png"},{id:"2",img:"img/003.png"},{id:"3",img:"img/004.png"},{id:"4",img:"img/01.png"},{id:"5",img:"img/02.png"},{id:"6",img:"img/03.png"},{id:"7",img:"img/04.png"},{id:"8",img:"img/05.png"},{id:"9",img:"img/06.png"},{id:"10",img:"img/07.png"},{id:"11",img:"img/03.png"},{id:"12",img:"img/006.png"},{id:"1",img:"img/002.png"},{id:"2",img:"img/003.png"},{id:"3",img:"img/004.png"},{id:"4",img:"img/01.png"},{id:"5",img:"img/02.png"},{id:"6",img:"img/03.png"},{id:"7",img:"img/04.png"},{id:"8",img:"img/05.png"},{id:"9",img:"img/06.png"},{id:"10",img:"img/07.png"},{id:"11",img:"img/03.png"},{id:"12",img:"img/006.png"}]	

$rootScope.list=[{id:"1",img:"img/002.png"},{id:"2",img:"img/003.png"},{id:"3",img:"img/004.png"},{id:"4",img:"img/005.png"},{id:"5",img:"img/006.png"},{id:"6",img:"img/001.png"},{id:"1",img:"img/002.png"},{id:"2",img:"img/003.png"},{id:"3",img:"img/004.png"},{id:"4",img:"img/01.png"},{id:"5",img:"img/02.png"},{id:"6",img:"img/03.png"},{id:"7",img:"img/04.png"},{id:"8",img:"img/05.png"},{id:"9",img:"img/06.png"},{id:"10",img:"img/07.png"},{id:"11",img:"img/03.png"},{id:"12",img:"img/006.png"}]	


//$rootScope.list=[{id:"1",img:"img/002.png"},{id:"2",img:"img/003.png"},{id:"3",img:"img/004.png"},{id:"4",img:"img/005.png"},{id:"5",img:"img/006.png"},{id:"6",img:"img/001.png"}]	

  $ionicPlatform.ready(function() {
      if (window.StatusBar)    StatusBar.styleDefault();
        $timeout(function(){
             if(navigator.splashscreen)  navigator.splashscreen.hide();   
        },2000);
  });
    
	   /*************************************search_modal.html******************/
	$ionicModal.fromTemplateUrl('templates/search_modal.html',function(modal){
	$rootScope.search_modal=modal;
	}, {
		scope: $rootScope,
		animation: 'slide-in-up'
	});
	
	$rootScope.opensearch_modal= function(){
		$rootScope.search_modal.show();
	};
	
	$rootScope.closesearch_modal= function() {	
		$rootScope.search_modal.hide();
	};
	$rootScope.$on('$destroy', function() {
		$rootScope.search_modal.remove();
	});
	$rootScope.$on('modal.hidden', function() {
    // Execute action
  });
 /*************************************search_modal.html******************/
 
  /*main_tab*/
 $ionicModal.fromTemplateUrl('templates/maintab.html', {
		scope: $rootScope,
		}).then(function(modal) {
			$rootScope.modal = modal;
		});
		$rootScope.openModal = function() {
			$rootScope.modal.show();
		};
		$rootScope.closeModal = function() {
		$rootScope.modal.hide();
		};
		//Cleanup the popover when we're done with it!
		$rootScope.$on('$destroy', function() {
		  $rootScope.modal.remove();
		});
		// Execute action on hide popover
	  $rootScope.$on('modal.hidden', function() {
			   // Execute action
		});
		// Execute action on remove popover
		$rootScope.$on('modal.removed', function() {
			   // Execute action
		});
	
	 /*other_cat*/
 $ionicModal.fromTemplateUrl('templates/category.html', {
		scope: $rootScope,
		}).then(function(modal) {
			$rootScope.cat_modal = modal;
		});
		$rootScope.opencat_modal = function() {
				$rootScope.cat_modal.show();
		};
		$rootScope.closecat_modal = function() {
		$rootScope.cat_modal.hide();
		};
		//Cleanup the popover when we're done with it!
		$rootScope.$on('$destroy', function() {
		  $rootScope.cat_modal.remove();
		});
		// Execute action on hide popover
	  $rootScope.$on('modal.hidden', function() {
			   // Execute action
		});
		// Execute action on remove popover
		$rootScope.$on('modal.removed', function() {
			   // Execute action
		});
	
  
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    cache: false,
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


  .state('app.acercade', {
    url: "/acercade",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/acercade.html",
        controller: "acercadeControl"
      }
    }
  })

    .state('app.about', {
    url: "/about",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
        controller: "aboutControl"
      }
    }
  })

  .state('app.contactanos', {
    url: "/contactanos",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/contactanos.html",
        controller: "contactanosControl"
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'telefonosControl'
      }
    }
  })
  
  .state('app.setting', {
    url: "/setting",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/setting.html"
      }
    }
  })
  .state('app.detail', {
    url: "/detail",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/detail.html",
        controller: 'detallesControl'
      }
    }
  })
 
    .state('app.random', {
      url: "/random",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "templates/random.html",
          controller: 'categoriasControl'
        }
      }
    })
	.state('app.world', {
      url: "/world",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "templates/world.html",
          controller: 'todosControl'
        }
      }
    })

      .state('app.imagen', {
      url: "/imagen",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "templates/imagen.html",
          controller: 'imagenControl'
        }
      }
    })

  //Tap informacion

    .state('app.correos', {
      url: "/correos",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "templates/correos.html",
          controller: 'correosControl'
        }
      }
    })
      .state('app.info', {
      url: "/info",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "templates/info.html",
          controller: 'infoControl'
        }
      }
    })
        .state('app.web', {
      url: "/web",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "templates/web.html",
          controller: 'webControl'
        }
      }
    })

  //

  
	
	.state('login', {
      url: "/login",
      cache: false,
          templateUrl: "templates/login.html"
    })

  .state('app.register', {
      url: "/register",
      cache: false,

      views: {
        'menuContent': {
          templateUrl: "templates/register.html",
          controller: 'registrarControl'
        }
      }
          
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/random');
})
