(
    function() {
        function xx($scope) {
            $scope.whatscope = "shared scope";
            $scope.atTheRate = " @ local scope"
        }
        angular.module('scopesapp').controller('scopecontroller', ['$scope', xx]);
    }

)()