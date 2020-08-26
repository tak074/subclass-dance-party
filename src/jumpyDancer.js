var makeJumperDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="jumper"></span>');
};

makeJumperDancer.prototype = Object.create(makeDancer.prototype);
makeJumperDancer.prototype.constructor = makeJumperDancer;


