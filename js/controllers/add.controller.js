let AddController = function($scope, $http, PARSE){
  
  let url =PARSE.URL + 'classes/MomsRecipes';
  console.log('url', url);

  let MyParseDataConstructor = function(obj){
    this.Name         = obj.name;
    this.Type         = obj.type;
    this.Picture      = obj.url;
    this.Ingredients  = obj.ingredients;
    this.Description  = obj.desc;
    this.Origination  = obj.origin;
  };

  $scope.addRecipe = (obj) =>{
    console.log(obj);
    
    //creating instance of constructor
    let temp = new MyParseDataConstructor(obj);

    $http.post(url, temp, PARSE.CONFIG).then((res)=>{
      console.log(res);
      $scope.recipe ={};
    });
  };
};

AddController.$inject=['$scope','$http','PARSE'];

export default AddController;