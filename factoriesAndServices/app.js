(
    function() {
        angular.module('factoriesAndServices', []);


    }
)();


/*

Now AngularJS provides many different factories and services out of the box,

and they really just call them services regardless of what they are.

But here's a quick look at some of the key ones that

are built-in, and we'll talk about a few of these throughout this module.

So when you want to make Ajax calls, you can use $http to do that.

$Timeout can be used in much the same way as Window does set time out.

$window is the angular way to get to the window object if you need to.

$Location will get you to the actual URL

and different information about it such as the hash.

You can get to the host, and those types of things.

$Q is used with asynchronous processes, such as ajax calls and others.

$Rootscope is used behind the scenes to actually

create new scopes as we, for instance, used controllers.

So if you'd like a repeating type of timer going, you can use $interval to do that.

$filter can be used to programmatically get to any custom filters or

others that Angular has, that you might wanna get to in a controller.

And then finally, $log kind of does what it says.

You can use this for general logging purposes.

Now, this isn't all of the services by any means.


*/