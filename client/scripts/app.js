//client side app.js

//client side routing

var personalWebsiteApp = angular.module("personalWebsiteApp", ['ngRoute', 'appControllers']);
var appControllers = angular.module("appControllers", []);

personalWebsiteApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when("/home", {
            templateUrl: "/assets/views/routes/home.html",
            controller: "HomeController"
    }).
    when("/about", {
        templateUrl: "/assets/views/routes/about.html",
        controller: "AboutController"
    }).
    when("/projects",{
        templateUrl: "/assets/views/routes/projects.html",
        controller: "ProjectsController"
    }).
    otherwise({
        redirectTo:"/home"
    })
}]);