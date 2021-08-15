(
    function() {
        function myservice() {
            this.serObj = {
                name: "me comin from service",
                getAge() {
                    return "you have my age now from service";
                }
            };

        }

        angular.module('factoriesAndServices').service('myservice', myservice);
    }

)();