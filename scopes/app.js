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
        angular.module('scopesapp').directive('equalToLocalScope', function() {
            return {
                scope: {
                    willchange: '='
                },
                template: "<p > local scope \"=\" : {{willchange}}.</p><button ng-click=\"willchange='overridden by child'\">Click to let child override itself and parent too</button>"
            }
        });
        angular.module('scopesapp').directive('ampersandLocalScope', function() {
            return {
                scope: {
                    somefunction: '&'
                },
                template: "<p> Hey this is & local scope</p> <button ng-click='somefunction()'>Click here to execute funtion from parent.</button>"
            }
        });
        angular.module('scopesapp').directive('linkFunction', function() {
            return {

                restrict: 'A',
                link: function(scope, ele, attr) {
                    console.log('ele', ele[0]);
                    ele[0].style.backgroundColor = "green";
                    ele[0].addEventListener('mouseenter', function() { this.style.backgroundColor = "pink"; });
                    ele[0].addEventListener('mouseleave', function() { this.style.backgroundColor = "green"; });
                    ele[0].addEventListener('click', function() { this.innerText = "Text Updated via link function"; });

                }
            }
        });
    }
)();