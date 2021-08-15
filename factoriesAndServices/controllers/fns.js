(
    function() {
        function xx($scope, myfactory) {
            $scope.title = "This is regarding Factory & Services";
            console.log('myfactory', myfactory)
            $scope.fromFactoryName = myfactory.name;
            $scope.fromFactoryAge = myfactory.getAge();
        }
        angular.module('factoriesAndServices').controller('fnsCtrl', ['$scope', 'myfactory', xx]); //inject factory 
    }
)();