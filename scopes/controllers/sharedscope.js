(
    function() {
        function xx($scope) {
            $scope.whatscope = "shared scope";
        }
        angular.module('scopesapp').controller('scopecontroller', ['$scope', xx]);
    }

)()