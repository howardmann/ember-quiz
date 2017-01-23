import Ember from 'ember';
// let $ = Ember.$;

export default Ember.Route.extend({
  actions: {
    createQuestion(question){
      // // Doing it the manual way without ember data binding
      // var name = $('input[name="name"]').val();
      // var answer1 = $('input[name="answer"]').eq(0).val();
      // var answer2 = $('input[name="answer"]').eq(1).val();
      // var answer3 = $('input[name="answer"]').eq(2).val();
      // var answersArr = [answer1, answer2, answer3];
      // this.get('store').saveQuestion(question, name, answersArr);
      //
      // // Clear forms and autofocus first input
      // $('input[type="text"]').val('');
      // $('input[type="text"]').eq(0).focus();

      // Doing it the 2-way data binding ember way. We need to transition away otherwise the input is bound
      this.get('store').saveQuestion(question);
      this.transitionTo('questions.question', question);
    }
  },
  model(){
    return this.get('store').newQuestion();
  },
  store: Ember.inject.service()
});
