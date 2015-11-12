let RecipeService = function($http, PARSE) {
  
  let url =PARSE.URL + 'classes/MomsRecipes';

  this.getRecipeList = function(){
    return $http({
      url     : url,
      method  : 'GET',
      headers : PARSE.CONFIG.headers,
      cache   : true
    });
  };

  this.getSingleRecipe = function(recipeId){
    return $http({
      url  : url + '/' + recipeId,
      cache :true,
      method :'GET',
      headers : PARSE.CONFIG.headers
    });

  };

};

RecipeService.$inject = ['$http','PARSE'];

export default RecipeService;