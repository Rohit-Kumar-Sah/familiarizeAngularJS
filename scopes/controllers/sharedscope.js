(
    function() {
        function xx($scope) {
            $scope.whatscope = "shared scope";
            $scope.atTheRate = " @ local scope";
            $scope.willchange = "this is parent value";
        }
        angular.module('scopesapp').controller('scopecontroller', ['$scope', xx]);
    }

)()