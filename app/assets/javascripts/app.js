//= require_self
//= require_tree ./gem_store

(function() {
  var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', '$scope', function($http, $scope){
    $scope.products = [];

    $http.get('/store-products.json').success(function(data){
      $scope.products = data;
    });
  }]);

  app.controller('ReviewController', ['$scope', function($scope) {  
    $scope.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      $scope.review = {};
    };
  }]);
})();