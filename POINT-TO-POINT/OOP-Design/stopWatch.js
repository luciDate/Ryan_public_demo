function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    },
    set: function(v) {
      return (startTime = v);
    }
  });
  Object.defineProperty(this, "endTime", {
    get: function() {
      return endTime;
    },
    set: function(v) {
      return (endTime = v);
    }
  });
  Object.defineProperty(this, "running", {
    get: function() {
      return running;
    },
    set: function(v) {
      return (running = v);
    }
  });
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    set: function(v) {
      return (duration = v);
    }
  });
}
StopWatch.prototype.start = function() {
  if (this.running) throw new Error("it is already watch");
  this.running = true;
  this.startTime = new Date();
};
StopWatch.prototype.stop = function() {
  if (!this.running) throw new Error("it is not watch");
  this.running = false;
  this.endTime = new Date();
  let seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};
StopWatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

let sw = new StopWatch();
console.log(sw.start());
console.log(sw.stop());
console.log(sw.duration);
