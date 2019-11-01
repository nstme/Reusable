'use strict';

const fn = () => {
  const foo = { name: 'john' };
  let bar = { name: 'jack' };

  foo.name = 'johnny';
  bar.name = 'jackie';

  bar = { lastname: 'doe', dob: '010100' };
};

module.exports = { fn };
