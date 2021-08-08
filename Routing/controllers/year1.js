(function() {

    function yearFun($scope) {
        $scope.title1 = "Routing";
    }

    angular.module('Subjects').controller('year1', ['$scope', yearFun]);

}());