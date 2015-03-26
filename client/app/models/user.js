import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('String'),
	wins: DS.attr('Number'),
	losses: DS.attr('Number'),
	email: DS.attr('String')
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
