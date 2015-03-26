define('foosball-champion-league/routes/users', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
    	model: function() {
            return this.store.find('user');
        }
    });

});