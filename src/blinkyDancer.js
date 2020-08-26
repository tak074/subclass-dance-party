var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
};

//prototype chain
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  (this.$node).css('border-color', '#' + randomColor);
  (this.$node).css('background-color', '#' + randomColor);
  this.$node.toggle();
};