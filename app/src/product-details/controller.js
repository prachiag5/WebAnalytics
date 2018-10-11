app.controller("productDetailController", function(
    $scope, $mdSidenav, $mdBottomSheet, $timeout, $log, $mdDialog, $rootScope, $mdMedia, $window, $timeout, $routeParams)
{
    $scope.productList = [{id: "1", name: "Grey T-Shirt", price: "$10", variant: "Grey"}, {id: "2", name: "Black T-Shirt", price: "$10", variant: "Black"}, {id: "3", name: "White T-Shirt", price: "$10", variant: "White"}, {id: "4", name: "Yellow T-Shirt", price: "$10", variant: "Yellow"}, {id: "5", name: "Red T-Shirt", price: "$10", variant: "Red"}, {id: "6", name: "Blue T-Shirt", price: "$10", variant: "Blue"}];
    var itemId = parseInt($routeParams.id)-1;
    $scope.item = $scope.productList[itemId];
    dataLayer.push({
        'ecommerce': {
          'detail': {
            'products': [{
              'name': $scope.item.name,         // Name or ID is required.
              'id': $scope.item.id,
              'price': '10'
             }]
           }
         }
      });
    console.log("item details", $scope.item.name, $scope.item.price);
    $scope.getProductImage = function(item) {
      var url = "./assets/images/" + item.variant + ".jpg";
      return url;
    };   
});