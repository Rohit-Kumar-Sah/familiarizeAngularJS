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
        angular.module('scopesapp').directive("atTheRateLocalScope", function() {
            return {
                scope: {
                    gettingfromparent1: '@ramu', //one-way data binding (with alias),
                    gettingfromparent2: '@', //one-way data binding (without alias)
                },
                template: "<p>this is {{gettingfromparent1}} using alias.</p> this is {{gettingfromparent2}} without alias."
            }
        });
    }
)();