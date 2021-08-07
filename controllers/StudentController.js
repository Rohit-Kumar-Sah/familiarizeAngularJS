//pre-requisite have your Module linked to View using ng-app="moduleName"

// Link this controller onto View sections by ng-controller="StudentController1"

//Option 1 (Utilizing global varible myApp)
myApp.controller('StudentController1', ['$scope', function($scope) {
    $scope.intro = "Option1";

    $scope.btnClicked = function() {
        alert("Button 1 click handled in controller");
    }

}]);


//Option 2 (referencing StudentApp directly ) ; Note: When needed to reference a module we dont pass 2nd param to angular.module(.....) i.e array for dependency. It's needed only during creating a module
angular.module('StudentApp').controller('StudentController2', ['$scope', function($scope) {
    $scope.intro = "Option2";

    $scope.btnClicked = function() {
        alert("Button 2 click handled in controller");
    }

}]);

// create a IIFE and concentrate on building logic first , and then pass that controller function into controller(.......) 
(function() {

    var xx = function($scope) { //dealing with JS minifiers, coz if they minify $scope (to 's', say) so everything would break
        $scope.intro = "Option3";

        $scope.btnClicked = function() {
            alert("Button 3 click handled in controller");
        }
    }

    angular.module('StudentApp').controller("StudentController3", ['$scope', xx]); //dealing with JS minifiers, pass the parameters needed by the controllern funtions above, as comma seperated strings's since minifiers wont touch string. Order is important , obviously. 

}());