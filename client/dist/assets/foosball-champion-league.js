define('foosball-champion-league/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].ActiveModelAdapter.extend({
		namespace: 'api/v1'
	});
	//export default DS.LSAdapter.extend({});

});
define('foosball-champion-league/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'foosball-champion-league/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('foosball-champion-league/controllers/users', ['exports', 'ember'], function (exports, Ember) {

   'use strict';

   exports['default'] = Ember['default'].ArrayController.extend({

      actions: {
      		inceaseWins: function(user){
   			user.set('wins', user.get('wins')+1);
   			user.save();
      		},

      	   	inceaseLosses: function(user){
   			user.set('losses', user.get('losses')+1);
   			user.save();
      		},

           createPlayer: function(newPlayerName) {
               // Create the new Todo model
               var user = this.store.createRecord('user', {
                   name: newPlayerName,
                   wins: 0,
                   losses: 0
               });
    
               // Clear the "New Todo" text field
               this.set('newPlayerName', '');
    
               // Save the new model
               user.save();
           }
       }
   });

});
define('foosball-champion-league/initializers/export-application-global', ['exports', 'ember', 'foosball-champion-league/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
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
define('foosball-champion-league/routes/users', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
    	model: function() {
            return this.store.find('user');
        }
    });

});
define('foosball-champion-league/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].ActiveModelSerializer.extend({});

});
define('foosball-champion-league/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("<h2 id='title'>Welcome to The Foosball Champions League</h2>\n\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('foosball-champion-league/templates/users', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <li>\n            <label>");
    stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" (");
    stack1 = helpers._triageMustache.call(depth0, "user.wins", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("-");
    stack1 = helpers._triageMustache.call(depth0, "user.losses", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(")</label> <button ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "inceaseWins", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(">Add Win</button> <button ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "inceaseLosses", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(">Add Loss</button>\n        </li>\n    ");
    return buffer;
    }

    data.buffer.push("<section id=\"main\">\n");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("text"),
      'id': ("new-player"),
      'placeholder': ("Add a new player"),
      'value': ("newPlayerName"),
      'action': ("createPlayer")
    },hashTypes:{'type': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID",'action': "STRING"},hashContexts:{'type': depth0,'id': depth0,'placeholder': depth0,'value': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n<ul id=\"todo-list\">\n    ");
    stack1 = helpers.each.call(depth0, "user", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</ul>\n \n</section>");
    return buffer;
    
  });

});
define('foosball-champion-league/tests/helpers/resolver', ['exports', 'ember/resolver', 'foosball-champion-league/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
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
define('foosball-champion-league/tests/test-helper', ['foosball-champion-league/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

  'use strict';

  ember_qunit.setResolver(resolver['default']);

  document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

  QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
  var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
  document.getElementById('ember-testing-container').style.visibility = containerVisibility;

});
define('foosball-champion-league/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'ApplicationAdapter', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function() {
    var adapter = this.subject();
    ok(adapter);
  });

});
define('foosball-champion-league/tests/unit/controllers/users-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:users', 'UsersController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function() {
    var controller = this.subject();
    ok(controller);
  });

});
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
define('foosball-champion-league/tests/unit/routes/users-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:users', 'UsersRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function() {
    var route = this.subject();
    ok(route);
  });

});
/* jshint ignore:start */

define('foosball-champion-league/config/environment', ['ember'], function(Ember) {
  var prefix = 'foosball-champion-league';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("foosball-champion-league/tests/test-helper");
} else {
  require("foosball-champion-league/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
//# sourceMappingURL=foosball-champion-league.map