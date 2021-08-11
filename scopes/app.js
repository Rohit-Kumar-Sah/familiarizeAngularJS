(
    function() {
        angular.module('scopesapp', []);

        angular.module('scopesapp').directive('sharedscope', function() {
            return {
                template: "this is {{whatscope}}"
            };
        });
        angular.module('scopesapp').directive('isolatedscopes', function() {
            return {
                scope: {},
                template: "this is isolated Scope"
            };
        });
    }
)();