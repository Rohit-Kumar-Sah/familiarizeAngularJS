(
    function() {
        angular.module('CDapp', []);

        angular.module('CDapp').directive('helloWorld', function() { // directive declared as helloWorld but to be used as hello-world (hyphen enters before canmelcase captial letters)
            return {
                template: "Heya , this is coming Hello World Custom directive" //outputs this text wherever directive hello-world is used 
            };
        });
    }
)();