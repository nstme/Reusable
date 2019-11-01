'use strict';

const rangeOdd = (start, end) => {
  let array = [];
  if (start === end && start !== 0) array = [start];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) array.push(i);
    }
  }
  return array;
};

module.exports = { rangeOdd };
