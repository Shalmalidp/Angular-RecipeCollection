let ListController = function($scope, $http, PARSE, RecipeService){

  //moved to services

  //let url = PARSE.URL +'classes/MomsRecipes';
  // $http.get(url, PARSE.CONFIG).then((res)=>{

  //   $scope.recipes = res.data.results;
  // });

  RecipeService.getRecipeList().then((res)=>{
    $scope.recipes = res.data.results;
  });


};

ListController.$inject=['$scope','$http', 'PARSE','RecipeService'];
export default ListController;