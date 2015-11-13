let SingleController = function($scope,$stateParams,$state, $http, PARSE,RecipeService){

  // let url = PARSE.URL + 'classes/MomsRecipes/' + $stateParams.recipeId;
  // console.log(url);
  // $http.get(url, PARSE.CONFIG).then((res)=>{
  //   console.log('res',res);
  //   $scope.singleRecipeDetails = res.data;
  // });
 
  RecipeService.getSingleRecipe($stateParams.recipeId).then((res) => { 
    $scope.singleRecipeDetails = res.data;
  });

  $scope.delete = function(obj){
    let reply = confirm('PLEASE CONFIRM' + obj.Name  +' WILL BE PERMANENTLY DELETED');
    if(reply){
      RecipeService.delete(obj).then((res)=>{
        alert('RECORD PERMANENTLY DELETED');
        $state.go('root.list');
      });
    }else {
      alert('NOT DELETED');
    }
  };
};

SingleController.$inject=['$scope','$stateParams','$state','$http','PARSE','RecipeService'];
export default SingleController;