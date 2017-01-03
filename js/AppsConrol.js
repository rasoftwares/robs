var app = angular.module('Robs', ['ngRoute']);


var a = [
         {
            "id" :"1",
        	 "name" :"Git Clone",
             "description" : "to pull source from github",
             "technology":"Version Control",
        	 "command" : "git clone <remote url>"
         },
         {
            "id" :"2",
             "name" :"Git Status",
             "description" : "Displays current state of the repository",
             "technology":"Version Control",
             "command" : "git status"
         },
         {
            "id" :"3",
             "name" :"Git Commit",
             "description" : "To commit into the remote repository, this is a three stop process. 1. git add 2. git commit 3. git push",
             "technology":"Version Control",
             "command" : "git add . && git commit -m 'some message' && git push"
         },
         {
            "id" :"4",
             "name" :"Symbolic link",
             "description" : "To Create symbolic link",
             "technology":"mac os",
             "command" : "ln -s <source dir> <destination dir>"
         }

	];

app.controller('RobsCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.productList = a;

    $scope.pageTitle="Robin Bennedict Luba";
    $scope.pageHeader="Ref Cards";
    $scope.pageSubHeader = "Links to various command references";


}]);
