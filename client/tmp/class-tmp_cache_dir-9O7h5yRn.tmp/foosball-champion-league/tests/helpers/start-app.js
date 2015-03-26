define('foosball-champion-league/tests/helpers/start-app', ['exports', 'ember', 'foosball-champion-league/app', 'foosball-champion-league/router', 'foosball-champion-league/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var App;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function() {
      App = Application['default'].create(attributes);
      App.setupForTesting();
      App.injectTestHelpers();
    });

    return App;
  }
  exports['default'] = startApp;

});