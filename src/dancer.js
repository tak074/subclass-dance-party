
var makeDancer = function(top, left, timeBetweenSteps) {
  // console.log(this);
  this.top = top;
  this.left = left;
  this.time = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  var context = this;
  setTimeout(function() { context.step(); }, this.time);
};

makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  (this.$node).css(styleSettings);
};
