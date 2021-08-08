(
    function() {
        angular.module('Subjects', ['ngRoute']); //adding ngRoute dependency to module

        angular.module('Subjects').config(function($routeProvider, $locationProvider) { //$routeProvider automatically injected by $routeProvider

            $routeProvider
                .when('/', { controller: 'year1', templateUrl: './view/Year1.html' })
                .when('/semesters/:semNo', { controller: 'semesters', templateUrl: './view/sem.html' })
                .when('/pageNotFound', { templateUrl: './view/NotFound.html' })
                .otherwise({ redirectTo: '/pageNotFound' });

            // angular team decided to change the default $location hash-prefix to '!'. So we revert it ;)
            $locationProvider.hashPrefix('');
        });
    }

)(); //Using IIFE so that a global variable need not be created for represeting module, hence other developers cannot accidently step on it