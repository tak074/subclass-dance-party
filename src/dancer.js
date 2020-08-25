
var makeDancer = function(top, left, timeBetweenSteps) {
  // console.log(this);
  this.top = top;
  this.left = left;
  this.time = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //how to invoke prototypes inside its constructor.

  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic this doesn't do anything interesting at all on each step,
  // it just schedules the next step

  var context = this;
  setTimeout(function() { context.step(); }, this.time);
};

makeDancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  (this.$node).css(styleSettings);
};
