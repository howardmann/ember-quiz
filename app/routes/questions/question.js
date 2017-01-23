import Ember from 'ember';
let $ = Ember.$;

export default Ember.Route.extend({
  actions: {
    createVote(question){
      var answerName = $('input[name="answer"]:checked').val();
      this.get('store').saveVote(answerName, question);
      this.transitionTo('questions.question.votes');
    }
  },
  model(params){
    const id = params.question_id;
    return this.get('store').getQuestion(id);
  },
  store: Ember.inject.service()
});
