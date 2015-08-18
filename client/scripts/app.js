//client side app.js



//client side routing
var personalWebsiteApp = angular.module("personalWebsiteApp", ['ngRoute', 'appControllers']);//ngRoute is a service we brought in with angular-route

var appControllers = angular.module("appControllers", []);//witch craft

personalWebsiteApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.//method chaining
        when("/home", {
            templateUrl: "/assets/views/routes/home.html", //only capitalize the U in Url
            controller:"HomeController"
        }).
        when("/about", {
            templateUrl: "/assets/views/routes/about.html",
            controller:"AboutController"
        }).
        when("/projects", {
            templateUrl: "/assets/views/routes/projects.html",
            controller:"ProjectsController"
        }).
        otherwise({//this is the catch all
            redirectTo: "/home"
        })
}]);