define('foosball-champion-league/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].ActiveModelAdapter.extend({
		namespace: 'api/v1'
	});
	//export default DS.LSAdapter.extend({});

});