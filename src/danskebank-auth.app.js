//By Tuanka- tuankaka@gmail.com
//https://github.com/tuanka/danskebank-auth.git

(function(){
  'use strict';

  angular.module('danskebank-auth', ['ionic','danskebank-auth.templates'])
	  
	
	.service('LoginService', function($q, $http) {
	    return {
	        loginUser: function(username, password) {
	            var url = "http://danskebank.mybluemix.net/danskebankdb/api/authenticate";
	            var deferred = $q.defer();         
	            
	            var data = {
	              "userid": username,
	              "password": password,
	              "type":"people",
	              "role":"manager"
	            };

	            $http.post(url, data).then(function(resp){
	              // Handle success
	              console.log("User authentication success!");
	              deferred.resolve(resp);  
	            },function(err){
	              // Handle error 
	              console.log("User authentication failure: " + JSON.stringify(err));
	              deferred.reject(err);  
	            });            
	                
	            return deferred.promise;            
	        }
	    }
	});
	  
})();