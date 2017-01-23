import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var question = this.modelFor('questions.question');
    return question;
  },
  store: Ember.inject.service()
});
