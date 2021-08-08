(
    function() {
        angular.module('Subjects', ['ngRoute']); //adding ngRoute dependency to module

        angular.module('Subjects').config(function($routeProvider) { //$routeProvider automatically injected by $routeProvider
            $routeProvider.when('/', { controller: '........', templateUrl: '......' });
        });
    }

)(); //Using IIFE so that a global variable need not be created for represeting module, hence other developers cannot accidently step on it