"use strict";

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    var frame = new Frame();

  });

  it("calculates the total for two rolls", function() {
    var frame = new Frame([1,2]);
    expect(frame.total()).toEqual(3);
  });

  it("calculates the total for a spare", function() {
    var frame = new Frame([1,9]);
    var nextFrame = new Frame([8,1]);
    expect(frame.total(nextFrame)).toEqual(18);
  });

  it("calculates the total for a strike", function() {
    var frame = new Frame([10,0]);
    var nextFrame = new Frame([8,1]);
    expect(frame.total(nextFrame)).toEqual(19);
  });

  it("caluclates the total for two strikes", function() {
    var frame = new Frame([10]);
    var nextFrame = new Frame([10]);
    var nextnextFrame = new Frame([8,1]);
    expect(frame.total(nextFrame, nextnextFrame)).toEqual(29);
  });

  it("caluclates the total for three strikes", function() {
    var frame = new Frame([10]);
    var nextFrame = new Frame([10]);
    var nextnextFrame = new Frame([10]);
    expect(frame.total(nextFrame, nextnextFrame)).toEqual(30);
  });
});
