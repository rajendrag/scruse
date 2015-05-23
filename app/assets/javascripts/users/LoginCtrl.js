(function() {
  var LoginCtrl;

  LoginCtrl = (function() {
    /*function LoginCtrl($log, $location, LoginService) {
      this.$log = $log;
      this.$location = $location;
      this.LoginService = LoginService;
      this.$log.debug("constructing LoginCtrl");
      this.loginObj = {};
    }*/

    function LoginCtrl($log, $location, LoginService) {
      this.$log = $log;
      this.$log.debug("constructing LoginCtrl");
      this.$location = $location;
      this.LoginService = LoginService;
      this.loginObj = {};
      //console.debug("constructing LoginCtrl")
    }

    LoginCtrl.prototype.login = function() {
      console.debug("login()");
      return this.LoginService.login(this.loginObj).then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data + " User");
          _this.loginObj = data;
          return _this.$location.path("/");
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unbale to Login: " + error);
        };
      })(this));
    };

    return LoginCtrl;

  })();

  controllersModule.controller('LoginCtrl', LoginCtrl);

}).call(this);
