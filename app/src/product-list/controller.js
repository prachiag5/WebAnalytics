app.controller("productListController", function(
    $scope, $location, $mdSidenav, $mdBottomSheet, $timeout, $log, $mdDialog, $rootScope, $mdMedia, $window, $timeout, $routeParams)
{
    $scope.productList = [{id: "1", name: "Grey T-Shirt", price: "$10", variant: 'Grey'}, {id: "2", name: "Black T-Shirt", price: "$10", variant: 'Black'}, {id: "3", name: "White T-Shirt", price: "$10", variant: 'White'}, {id: "4", name: "Yellow T-Shirt", price: "$10", variant: 'Yellow'}, {id: "5", name: "Red T-Shirt", price: "$10", variant: 'Red'}, {id: "6", name: "Blue T-Shirt", price: "$10", variant: 'Blue'}];
    dataLayer.push({
        'ecommerce': {
          'currencyCode': 'SGD',                       // Local currency is optional.
          'impressions': [
           {
             'name': 'Grey T-Shirt',       // Name or ID is required.
             'id': '1',
             'price': '10',
             'category': 'Apparel',
             'variant': 'Grey',
             'position': 1
           },
           {
             'name': 'Black T-Shirt',
             'id': '2',
             'price': '10',
             'category': 'Apparel',
             'variant': 'Black',
             'position': 2
           },
           {
            'name': 'White T-Shirt',       // Name or ID is required.
            'id': '3',
            'price': '10',
            'category': 'Apparel',
            'variant': 'White',
            'position': 3
          },
          {
            'name': 'Yellow T-Shirt',       // Name or ID is required.
            'id': '4',
            'price': '10',
            'category': 'Apparel',
            'variant': 'Yellow',
            'position': 4
          },
          {
            'name': 'Red T-Shirt',       // Name or ID is required.
            'id': '5',
            'price': '10',
            'category': 'Apparel',
            'variant': 'Red',
            'position': 5
          },
          {
            'name': 'Blue T-Shirt',       // Name or ID is required.
            'id': '6',
            'price': '10',
            'category': 'Apparel',
            'variant': 'Blue',
            'position': 6
          }]
        }
      });
      $scope.requestButtonClicked = function(id) {
        console.log("id", id);
        var itemPos = (parseInt(id)-1);
        var productObj = $scope.productList[itemPos];
        console.log("productObj", productObj);
        dataLayer.push({
            'event': 'productClick',
            'ecommerce': {
              'click': {
                'products': [{
                  'name': productObj.name,          // Name or ID is required.
                  'id': productObj.id,
                  'price': '10',                    // productObj.price
                  'category': 'Apparel',
                  'variant': productObj.variant,
                  'position': parseInt(id)
                 }]
               }
             },
             'eventCallback': function() {
               $location.path("/product/" + id);
               console.log("value of dataLayer", dataLayer);
             }
          }); 
        // $location.path("/product/" + id);
    };
    $scope.getProductImage = function(item) {
      var url = "./assets/images/" + item.variant + ".jpg";
      return url;
    };    
    });