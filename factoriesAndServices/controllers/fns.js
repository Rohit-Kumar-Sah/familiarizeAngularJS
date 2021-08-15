(
    function() {
        function xx($scope, myfactory, myservice) {
            $scope.title = "This is regarding Factory & Services";
            $scope.fromFactoryName = myfactory.name;
            $scope.fromFactoryAge = myfactory.getAge();
            $scope.fromServiceName = myservice.serObj.name;
            $scope.fromServiceAge = myservice.serObj.getAge();
        }
        angular.module('factoriesAndServices').controller('fnsCtrl', ['$scope', 'myfactory', 'myservice', xx]); //inject factory & service
    }
)();