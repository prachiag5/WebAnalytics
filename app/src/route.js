app.config(function($routeProvider) {
    $routeProvider
    .when("/productlist", {
        controller: "productListController",
        templateUrl : "src/product-list/template.html"
    })
    .when("/product/:id", {
        controller: "productDetailController",
        templateUrl : "src/product-details/template.html"
    })
    .when("/", {
        controller: "productListController",
        templateUrl : "src/product-list/template.html"
    });
//.otherwise({ redirectTo: "/" });
});