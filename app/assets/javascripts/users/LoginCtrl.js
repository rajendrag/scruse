(function() {
  var LoginCtrl;

  LoginCtrl = (function() {
    function LoginCtrl($log, $location, LoginService) {
      this.$log = $log;
      this.$location = $location;
      this.LoginService = LoginService;
      this.$log.debug("constructing LoginCtrl");
      this.login = {};
    }

    LoginCtrl.prototype.login = function() {
      this.$log.debug("login()");
      return this.LoginService.login(this.login).then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data + " User");
          _this.login = data;
          return _this.$location.path("/");
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unable to create User: " + error);
        };
      })(this));
    };

    return LoginCtrl;

  })();

  controllersModule.controller('LoginCtrl', LoginCtrl);

}).call(this);
