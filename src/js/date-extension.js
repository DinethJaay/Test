if (!Date.prototype.daysTo) {
  Date.prototype.daysTo = function (date2) {
    if (!(date2 instanceof Date)) {
      throw new TypeError("Argument must be a valid Date object");
    }

    const miliSecondsPerDay = 24 * 60 * 60 * 1000;
    const difference = Math.abs(this - date2);
    return Math.floor(difference / miliSecondsPerDay);
  };
}

module.exports = Date;
