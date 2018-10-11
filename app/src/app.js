var app = angular.module('productsView', ['ngMaterial', 'ngRoute'])
                 .config(function($mdIconProvider) {
                    $mdIconProvider
                    .defaultIconSet("./assets/svg/avatars.svg", 128)
                    .icon("menu", "./assets/svg/menu.svg", 24)
                    .icon("shopping_cart", "./assets/svg/shopping_cart.svg", 24);
                 });   
  
  