(function(){
  var app = angular.module("basehacks", ["firebase"]);

  app.config(function() {
    var config = {
      apiKey: "AIzaSyA3_gED2MawMfwPlSN4CCNS032eTdXmtao",
      authDomain: "project-5737053587009917687.firebaseapp.com",
      databaseURL: "https://project-5737053587009917687.firebaseio.com",
      storageBucket: "project-5737053587009917687.appspot.com",
    };
    firebase.initializeApp(config);
  }

  app.controller("AuthenticationController", ["$scope", "$firebaseAuth", "$firebaseObject", "$window", function($scope, $firebaseAuth, $firebaseObject, $window){
    $scope.authenticated = false;

    $scope.auth = $firebaseAuth();
    this.init = function(){
      $scope.auth.$onAuthStateChanged(
        function(user) {
          if (user) {
            $scope.email = user.email;
            $scope.authenticated = true;
          } else {
            $scope.authenticated = false;
            $window.location.replace("signInPage.html");
          }
        }
      );
    }

    this.logout = function(){
      $scope.auth.$signOut();
    }
  }]);

})();