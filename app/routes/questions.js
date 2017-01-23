import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').getAllQuestions();
  },
  store: Ember.inject.service()
});
