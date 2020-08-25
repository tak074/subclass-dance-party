var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;
};

//prototype chain
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this); //call the old step and to refer it back to itself.

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};