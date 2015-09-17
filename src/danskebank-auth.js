define(["Q"],function(Q){
  
  /**
   * This class acts as a facade to authenticate
   * @module DanskeAuth
   */
  
  /**
   * DanskeAuth Constructor
   */
  function DanskeAuth(){    
        if (!(this instanceof DanskeAuth)) {
            throw new TypeError("DanskeAuth constructor cannot be called as a function.");
        }//end if
        this.authURL = null;
        
  };  
  
  DanskeAuth.prototype = {
      
      constructor: DanskeAuth,
      
      /**
      * Set the authentication server URL
      * @param authURL {string} The  URL to authenticate 
      */
      setAuthServer : function (serverURL) {
          this.authURL = serverURL;
      },
      

      /**
       * Sends the credentials to the authentication server.
       * 
       * @param  {Object} username: the userename to autenticate
       *                  password: the password 
       *                  success: callback() function to exectute on success login
       *                  failed: callback(error) function to execute on failed login, send the error message
       * 
       */

      loginUser: function(credentials) {
          var url = authURL;
          var deferred = $q.defer();         
          
          var data = {
            "userid": credentials.username,
            "password": credentials.password,          
            "role":credentials.role,
            "type":"people"
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
      

  };
  
  //Return the class
  return DanskeAuth;
  
});




