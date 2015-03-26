define('foosball-champion-league/router', ['exports', 'ember', 'foosball-champion-league/config/environment'], function (exports, Ember, config) {

	'use strict';

	var Router = Ember['default'].Router.extend({
		location: config['default'].locationType
	});

	Router.map(function() {
		this.resource('users', {
			path: '/'
		});
	});

	exports['default'] = Router;

});