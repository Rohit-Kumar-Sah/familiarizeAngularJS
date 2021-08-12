(
    function() {
        function xx($scope) {
            $scope.whatscope = "shared scope";
            $scope.atTheRate = " @ local scope";
            $scope.willchange = "this is parent value";
            $scope.randomAlert = function() { alert("i am present in parent"); }
        }
        angular.module('scopesapp').controller('scopecontroller', ['$scope', xx]);
    }

)()