'use strict';

const phonebook = [
  { name: 'John', phone: '+12131112233' },
  { name: 'Jack', phone: '+12132223344' },
  { name: 'Jill', phone: '+12133334455' },
  { name: 'Jull', phone: '+12134445566' },
];

const findPhoneByName = name => {
  for (const entry of phonebook) {
    if (entry.name === name) return entry.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
