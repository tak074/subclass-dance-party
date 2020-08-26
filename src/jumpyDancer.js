var makeJumperDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="jumper"></span>');
};

makeJumperDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeJumperDancer.prototype.constructor = makeJumperDancer;


