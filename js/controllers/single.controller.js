let SingleController = function($scope,$stateParams, $http, PARSE,RecipeService){

  // let url = PARSE.URL + 'classes/MomsRecipes/' + $stateParams.recipeId;
  // console.log(url);
  // $http.get(url, PARSE.CONFIG).then((res)=>{
  //   console.log('res',res);
  //   $scope.singleRecipeDetails = res.data;
  // });
 
  RecipeService.getSingleRecipe($stateParams.recipeId).then((res) => { 
    $scope.singleRecipeDetails = res.data;
  });
};

SingleController.$inject=['$scope','$stateParams','$http','PARSE','RecipeService'];
export default SingleController;