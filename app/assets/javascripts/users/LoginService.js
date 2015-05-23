(function() {
  var LoginService;

  LoginService = (function() {
    LoginService.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    LoginService.defaultConfig = {
      headers: LoginService.headers
    };

    function LoginService($log, $http, $q) {
      this.$log = $log;
      this.$http = $http;
      this.$q = $q;
      this.$log.debug("constructing LoginService");
    }

    LoginService.prototype.login = function(login) {
      var deferred;
      this.$log.debug("Login User " + (angular.toJson(login, true)));
      deferred = this.$q.defer();
      this.$http.post("/login", login).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successfully LoggedIn - status " + status);
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, header) {
          _this.$log.error("Failed to login user - status " + status);
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    return LoginService;

  })();

  servicesModule.service('LoginService', LoginService);

}).call(this);
