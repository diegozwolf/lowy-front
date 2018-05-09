'use strict';

describe('Service: botyFactory', function () {

  // load the service's module
  beforeEach(module('botiAppApp'));

  // instantiate service
  var botyFactory;
  beforeEach(inject(function (_botyFactory_) {
    botyFactory = _botyFactory_;
  }));

  it('should do something', function () {
    expect(!!botyFactory).toBe(true);
  });

});
