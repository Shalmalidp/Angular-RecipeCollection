let AddController = function($scope, RecipeService){

  // // MOVED TO SERVICES 
  // let url =PARSE.URL + 'classes/MomsRecipes';
  // console.log('url', url);

  // // CONSTRUCTOR FOR ADD MOVED TO SERVICES TOO
  // let MyParseDataConstructor = function(obj){
  //   this.Name         = obj.name;
  //   this.Type         = obj.type;
  //   this.Picture      = obj.url;
  //   this.Ingredients  = obj.ingredients;
  //   this.Description  = obj.desc;
  //   this.Origination  = obj.origin;
  // };
  //method called in tpl
  $scope.addRecipe = (obj) =>{
    console.log(obj);
    RecipeService.addNewRecipe(obj).then(()=>{
      $scope.recipe= {};
    });
    

    //creating instance of constructor 
    //moved to SERVICe
    // let temp = new MyParseDataConstructor(obj);

    // $http.post(url, temp, PARSE.CONFIG).then((res)=>{
    //   console.log(res);
    //   $scope.recipe ={};
    // });
  };
};

AddController.$inject=['$scope','RecipeService'];

export default AddController;