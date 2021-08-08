(function() {

    function controlFun($scope) {
        $scope.title = "Routing";
    }

    angular.module('Subjects').controller('SubjectController', ['$scope', controlFun]);

}());