define('foosball-champion-league/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    	name: DS['default'].attr('String'),
  	wins: DS['default'].attr('Number'),
  	losses: DS['default'].attr('Number'),
  	email: DS['default'].attr('String')
  }).reopenClass({
      FIXTURES: [
          {
              id: 1,
              name: "Dan Hamilton",
              wins: 7,
              losses: 6
          },
          {
              id: 2,
              name: "Joel Norman",
              wins: 2,
              losses: 10
          },
          {
              id: 3,
              name: "Nick Tippmann",
              wins: 15,
              losses: 5
          }
      ]
  });

});