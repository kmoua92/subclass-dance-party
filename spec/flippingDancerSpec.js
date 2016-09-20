describe('flippingDancer', function() {

  var flippingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flippingDancer = new makeFlippingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flippingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(flippingDancer.$node, 'toggle');
    flippingDancer.step();
    expect(flippingDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flippingDancer, 'step');
      expect(flippingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flippingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(flippingDancer.step.callCount).to.be.equal(2);
    });
  });
});
