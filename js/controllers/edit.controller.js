let EditController = function($scope, $stateParams, RecipeService, $state){

  RecipeService.getSingleRecipe($stateParams.recipeId).then((res)=>{
    $scope.recipe =res.data;
    console.log('res.data',res.data);
  });
  $scope.updateRecipe = function(obj) {
    RecipeService.update(obj).then((res)=>{ 
      console.log(res);
      $state.go('root.list');
    });
  };

};

EditController.$inject=['$scope','$stateParams','RecipeService','$state'];
export default EditController;