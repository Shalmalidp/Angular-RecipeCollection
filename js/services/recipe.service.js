let RecipeService = function($http, PARSE) {
  
  let url =PARSE.URL + 'classes/MomsRecipes';
  //LIST VIEW
  this.getRecipeList = function(){
    return $http({
      url     : url,
      method  : 'GET',
      headers : PARSE.CONFIG.headers,
      cache   : true
    });
  };
  //SINGLE VIEW
  this.getSingleRecipe = function(recipeId){
    return $http({
      url  : url + '/' + recipeId,
      cache :true,
      method :'GET',
      headers : PARSE.CONFIG.headers
    });
  };

  // ADD VIEW
  let MyParseDataConstructor = function(obj){
    this.Name         = obj.name;
    this.Type         = obj.type;
    this.Picture      = obj.url;
    this.Ingredients  = obj.ingredients;
    this.Description  = obj.desc;
    this.Origination  = obj.origin;
  };

  this.addNewRecipe = function(obj){
    let temp = new MyParseDataConstructor(obj);
    $http.post(url, temp, PARSE.CONFIG).then((res)=>{
      console.log(res);
    });
  };
 
  // EDIT VIEW
  this.update = function(obj) {
    return $http.put(url +'/' + obj.objectId, obj, PARSE.CONFIG);
  };

  //DELETE VIEW
  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

RecipeService.$inject = ['$http','PARSE'];

export default RecipeService;