define('foosball-champion-league/tests/unit/models/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('user', 'User', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function() {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});