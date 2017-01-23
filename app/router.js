import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questions', function() {
    this.route('question', { path: ':question_id'}, function() {
      this.route('votes');
    });
    this.route('new');
  });
});

export default Router;
