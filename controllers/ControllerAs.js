/*

 Stand-alone "Controller As" funtions


Angular 1.3 or higher the stand-alone function approach shown above won't work since the Angular team changed that functionality
//use this in place of $scope and $scope dosent needs to passed into controller-As funtion


function MyController() {

    this.intro = "Getting started with Controllers";

    this.btn1Clicked = function () {
        alert("Button 1 click handled in controller");
    }
}

*/