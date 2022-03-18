var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", function($scope){
	console.log("in myController");
	
	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";


    $scope.users = [
        {username: "hafiz", fullName: "Hafizur Rahman", email: "hafiz6512@gmail.com"},
        {username: "shuman", fullName: "Jobaer Shuman", email: "shuman@gmail.com"},
        {username: "badhon", fullName: "Badhon", email: "badhon@gmail.com"}
    ];

    $scope.saveUser = function(){
    	$scope.users.push($scope.newUser);
    	$scope.newUser = {};
    	$scope.message = "New User Added Successfully";
    };

    $scope.selectUser = function(user){
    	$scope.clickedUser = user;
    };

    $scope.updateUser = function(){
    	$scope.message = "User Updated Successfully";
    };

    $scope.deleteUser = function(){
    	$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    	$scope.message = "User Deleted Successfully";
    };

    $scope.clearMessage = function(){
    	$scope.message = "";
    };

}]);