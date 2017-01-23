import Ember from 'ember';
import Question from '../models/question';
import Answer from '../models/answer';
import Vote from '../models/vote';

// Fake server database
const questions = [];

let question = Question.create({
  id: '1',
  name: 'How old is Tom Cruise?',
  answers: []
});

let answer1 = Answer.create({id: '1', name: '45', question: question, votes: []});
let answer2 = Answer.create({id: '2', name: '55', question: question, votes: []});
let answer3 = Answer.create({id: '3', name: '65', question: question, votes: []});

var vote1 = Vote.create({answer: answer1});
var vote2 = Vote.create({answer: answer2});
var vote3 = Vote.create({answer: answer1});
answer1.get('votes').pushObject(vote1);
answer2.get('votes').pushObject(vote2);
answer1.get('votes').pushObject(vote3);

question.get('answers').pushObjects([answer1, answer2, answer3]);

questions.pushObject(question);

question = Question.create({
  id: '2',
  name: 'Which of these people are still alive?',
  answers: []
});

question.get('answers').pushObjects([
  Answer.create({id: '4', name: 'Fidel Castro', question: question, votes: []}),
  Answer.create({id: '5', name: 'David Bowie', question: question, votes: []}),
  Answer.create({id: '6', name: 'Helen Mirren', question: question, votes: []})
]);

questions.pushObject(question);

question = Question.create({
  id: '3',
  name: 'Which of the following are endangered species?',
  answers: []
});

question.get('answers').pushObjects([
  Answer.create({id: '7', name: 'Crocodile', question: question, votes: []}),
  Answer.create({id: '8', name: 'Koala', question: question, votes: []}),
  Answer.create({id: '9', name: 'Kangaroo', question: question, votes: []})
]);

questions.pushObject(question);


export default Ember.Service.extend({
  getAllQuestions(){
    return questions;
  },

  getQuestion(id){
    return this.getAllQuestions().findBy('id', id);
  },

  newQuestion(){
    const question = Question.create({
      answers: []
    });

    question.get('answers').pushObjects([
      Answer.create({question: question, votes: [] }),
      Answer.create({question: question, votes: [] }),
      Answer.create({question: question, votes: [] })
    ]);

    return question;
  },

  // saveQuestion using jQuery
  // saveQuestion(question, name, answersArr){
  //   question.name = name;
  //   question.answers.forEach(function(answer, i){
  //     return answer.name = answersArr[i];
  //   });
  //
  //   questions.pushObject(question);
  //   question.set('id', questions.length);
  // }
  // saveQuestion using ember 2-way data binding
  saveQuestion(question) {
    questions.pushObject(question);
    question.set('id', questions.length);
  },

  saveVote(answerName, question) {
    let answer = question.get('answers').findBy('name', answerName);
    let vote = Vote.create({answer: answer});
    answer.get('votes').pushObject(vote);
  }
});
