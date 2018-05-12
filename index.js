function produceDrivingRange(blockRange) {
  return function(start, end) {
    result = blockRange - (parseInt(end) - parseInt(start));
    if (result < 0) {
      return `${Math.abs(result)} blocks out of range`;
    } else {
      return `within range by ${result}`;
    };
  };
};

function produceTipCalculator(percentageTip) {
  return function(charge) {
    return charge * percentageTip;
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};
