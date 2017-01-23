import Ember from 'ember';

export function increment(params/*, hash*/) {
  const alphabet = 'ABCDEFGHIJKLMNOP';
  return alphabet[parseInt(params)];
}

export default Ember.Helper.helper(increment);
