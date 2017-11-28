describe("Frame", function() {

  var frame;
  var roll1;
  var roll2;
  var roll3;

  beforeEach(function() {
    roll1 = jasmine.createSpyObj("roll",["getKnockedPins"]);
    roll2 = jasmine.createSpyObj("roll",["getKnockedPins"]);
    roll3 = jasmine.createSpyObj("roll",["getKnockedPins"]);
    frame = new Frame(roll1, roll2);
  });

  describe("#new", function() {
    it("creates a new frame object", function() {
      expect(frame).toEqual(jasmine.any(Frame));
    });
    it("includes a property rolls",function() {
      expect(frame.getRolls()).toEqual([roll1, roll2]);
    });
    it("includes a property max pins",function() {
      expect(frame.getMaxPins()).toEqual(10);
    });
  });

  describe("#scoreFrame", function() {
    it("sums the knocked pins property of the first two elements", function() {
      var roll4 = {
        getKnockedPins: function() {
          return 4
        },
      };
      var roll5 = {
        getKnockedPins: function() {
          return 1
        },
      };
      frame2 = new Frame(roll4, roll5);
      expect(frame2.scoreFrame()).toEqual(5);
    });
  });

  describe("#checkStrike", function(){
    it("expects it to be true if first roll knocks 10 pins", function() {
      var roll6 = {
        getKnockedPins: function() {
          return 10
        },
      };
      frame3 = new Frame(roll6, roll1)
      expect(frame3.checkStrike()).toEqual(true)
    });
    it("expects it to be true if first roll knocks 10 pins", function() {
      var roll6 = {
        getKnockedPins: function() {
          return 8
        },
      };
      frame3 = new Frame(roll6, roll1)
      expect(frame3.checkStrike()).toEqual(false)
    });
  });

  describe("#getRollKnockedPins", function() {
    it("returns the knocked pins of the corresponding indexed roll", function() {
      var roll4 = {
        getKnockedPins: function() {
          return 4
        },
      };
      var roll5 = {
        getKnockedPins: function() {
          return 1
        },
      };
      frame2 = new Frame(roll4, roll5);
      expect(frame2.getRollKnockedPins(0)).toEqual(4);
      expect(frame2.getRollKnockedPins(1)).toEqual(1);
    });
  });
});
