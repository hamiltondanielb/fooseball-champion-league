import Ember from 'ember';

export default Ember.ArrayController.extend({

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
