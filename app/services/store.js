import Ember from 'ember';
import Question from '../models/question';
import Answer from '../models/answer';

// Fake server database
const questions = [];

let question = Question.create({
  id: '1',
  name: 'How old is Tom Cruise?',
  answers: []
});

question.get('answers').pushObjects([
  Answer.create({id: '1', name: '45', question: question}),
  Answer.create({id: '2', name: '55', question: question}),
  Answer.create({id: '3', name: '65', question: question})
]);

questions.pushObject(question);

question = Question.create({
  id: '2',
  name: 'Which of these people are still alive?',
  answers: []
});

question.get('answers').pushObjects([
  Answer.create({id: '4', name: 'Fidel Castro', question: question}),
  Answer.create({id: '5', name: 'David Bowie', question: question}),
  Answer.create({id: '6', name: 'Helen Mirren', question: question})
]);

questions.pushObject(question);

question = Question.create({
  id: '3',
  name: 'Which of the following are endangered species?',
  answers: []
});

question.get('answers').pushObjects([
  Answer.create({id: '7', name: 'Crocodile', question: question}),
  Answer.create({id: '8', name: 'Koala', question: question}),
  Answer.create({id: '9', name: 'Kangaroo', question: question})
]);

questions.pushObject(question);


export default Ember.Service.extend({
  getAllQuestions(){
    return questions;
  },

  getQuestion(id){
    return this.getAllQuestions().findBy('id', id);
  }
});
