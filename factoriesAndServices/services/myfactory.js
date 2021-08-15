(
    function() {
        function myfactory() {
            let facObj = {
                name: "me comin from factory",
                getAge() {
                    return "you have my age now from factory";
                }
            };
            return facObj; //important to return an factory object that you want to expose for using
        }

        angular.module('factoriesAndServices').factory('myfactory', myfactory);
    }

)();