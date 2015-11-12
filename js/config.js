//CONFIG FILE  IS MORE LIKE THE ROUTER FILE IN BACKBONE SPECIFIES WHICH ROUTE GOES TO WHICH PAGE

let config = function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root',{
      abstract :true,
      templateUrl :'templates/layout.tpl.html' 
    })
    .state('root.list',{
      url:'/',
      controller : 'ListController',
      templateUrl:'templates/list.tpl.html'
    })
    .state('root.single',{
      url : '/single/:recipeId',
      controller :'SingleController',
      templateUrl : 'templates/single.tpl.html'
    })
    .state('root.add',{
      url :'/add',
      controller :'AddController',
      templateUrl : 'templates/addRecipes.tpl.html'
    })
    .state('root.edit',{
      url : '/edit',
      controller :'EditController',
      templateUrl :'templates/editRecipes.tpl.html'
    })
    .state('root.about',{
      url :'/about',
      controller :'AboutController',
      templateUrl : 'templates/about.tpl.html'
    })
    .state('root.contact',{
      url :'/contact',
      controller :'ContactController',
      templateUrl : 'templates/contact.tpl.html'
    })
    .state('root.delete',{
      url :'/delete',
      controller :'DeleteController',
      templateUrl : 'templates/deleteRecipe.tpl.html'
    });

};

config.$inject=['$stateProvider','$urlRouterProvider'];

export default config;



