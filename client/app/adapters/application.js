import DS from 'ember-data';

//export default DS.RESTAdapter.extend({});
//export default DS.FixtureAdapter.extend({});
export default DS.ActiveModelAdapter.extend({
	namespace: 'api/v1'
});
//export default DS.LSAdapter.extend({});
