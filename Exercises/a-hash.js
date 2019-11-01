'use strict';

const phonebook = {
  'John': '+12131112233',
  'Jack': '+12132223344',
  'Jill': '+12133334455',
  'Jull': '+12134445566',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
