(function() {
  var UpdateUserCtrl;

  UpdateUserCtrl = (function() {
    function UpdateUserCtrl($log, $location, $routeParams, UserService) {
      this.$log = $log;
      this.$location = $location;
      this.$routeParams = $routeParams;
      this.UserService = UserService;
      this.$log.debug("constructing UpdateUserController");
      this.user = {};
      this.findUser();
    }

    UpdateUserCtrl.prototype.updateUser = function() {
      this.$log.debug("updateUser()");
      this.user.active = true;
      return this.UserService.updateUser(this.$routeParams.firstName, this.$routeParams.lastName, this.user).then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data + " User");
          _this.user = data;
          return _this.$location.path("/");
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unable to update User: " + error);
        };
      })(this));
    };

    UpdateUserCtrl.prototype.findUser = function() {
      var firstName, lastName;
      firstName = this.$routeParams.firstName;
      lastName = this.$routeParams.lastName;
      this.$log.debug("findUser route params: " + firstName + " " + lastName);
      return this.UserService.listUsers().then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data.length + " Users");
          return _this.user = (data.filter(function(user) {
            return user.firstName === firstName && user.lastName === lastName;
          }))[0];
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unable to get Users: " + error);
        };
      })(this));
    };

    return UpdateUserCtrl;

  })();

  controllersModule.controller('UpdateUserCtrl', UpdateUserCtrl);

}).call(this);