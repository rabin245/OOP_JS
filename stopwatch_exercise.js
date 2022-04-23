function Stopwatch() {
  let duration = 0;
  let totalDuration = 0;
  let isRunning = false;

  this.start = () => {
    if (isRunning) {
      throw new Error("Stopwatch has already started.");
    } else {
      isRunning = true;
      duration = 0;
      this.controller = setInterval(increase, 100);
    }
  };
  let increase = function () {
    duration += 0.01;
  };

  this.stop = () => {
    if (!isRunning) {
      throw new Error("Stopwatch has already stopped.");
    } else {
      isRunning = false;
      clearInterval(this.controller);
      totalDuration += duration;
    }
  };
  this.reset = () => {
    totalDuration = 0;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return totalDuration;
    },
  });
}

const sw = new Stopwatch();

// vid solution
function Stopwatch1() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has alreay stopped.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw1 = new Stopwatch1();
