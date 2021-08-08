(
    function() {
        var semsFun = function($scope, $routeParams) {
            $scope.semNo = $routeParams.semNo;
        }

        angular.module('Subjects').controller('semesters', ['$scope', '$routeParams', semsFun]);
    }
)();