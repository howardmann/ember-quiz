import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const id = params.question_id;
    return this.get('store').getQuestion(id);
  },
  store: Ember.inject.service()
});
