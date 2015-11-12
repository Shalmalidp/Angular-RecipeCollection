let EditController = function($scope, $stateParams, RecipeService){

  RecipeService.getSingleRecipe($stateParams.recipeId).then((res)=>{
    $scope.recipe =res.data;
  });
  $scope.updateRecipe = function(obj) {
    RecipeService.update(obj).then((res)=>{
      $scope.recipe={};
      console.log(res);
    });
  };

};

EditController.$inject=['$scope','$stateParams','RecipeService'];
export default EditController;