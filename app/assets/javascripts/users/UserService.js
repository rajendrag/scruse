(function() {
  var UserService;

  UserService = (function() {
    UserService.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    UserService.defaultConfig = {
      headers: UserService.headers
    };

    function UserService($log, $http, $q) {
      this.$log = $log;
      this.$http = $http;
      this.$q = $q;
      this.$log.debug("constructing UserService");
    }

    UserService.prototype.listUsers = function() {
      var deferred;
      this.$log.debug("listUsers()");
      deferred = this.$q.defer();
      this.$http.get("/users").success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successfully listed Users - status " + status);
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, headers) {
          _this.$log.error("Failed to list Users - status " + status);
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    UserService.prototype.createUser = function(user) {
      var deferred;
      this.$log.debug("createUser " + (angular.toJson(user, true)));
      deferred = this.$q.defer();
      this.$http.post('/user', user).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successfully created User - status " + status);
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, headers) {
          _this.$log.error("Failed to create user - status " + status);
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    UserService.prototype.updateUser = function(firstName, lastName, user) {
      var deferred;
      this.$log.debug("updateUser " + (angular.toJson(user, true)));
      deferred = this.$q.defer();
      this.$http.put("/user/" + firstName + "/" + lastName, user).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successfully updated User - status " + status);
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, header) {
          _this.$log.error("Failed to update user - status " + status);
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    return UserService;

  })();

  servicesModule.service('UserService', UserService);

}).call(this);
