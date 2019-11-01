'use strict';

const range = (start, end) => {
  let array = [];
  if (start === end) array = [start];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
  }
  return array;
};

module.exports = { range };
