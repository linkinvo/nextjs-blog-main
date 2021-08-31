'use strict';

const users = [
  {
    firstName: 'Luke Skywalker',
    lastName: 'Skywalker',
    role: 'ClIENT',
    phone: '+380955746522',
    email: 'lukeSk@gmail.com',
    createdAt:  Date.now() / 1000,
    updatedAt:  Date.now() / 1000,
  },
  {
    firstName: 'Vika',
    lastName: 'Sky',
    role: 'ADMIN',
    phone: '+380978636522',
    email: 'vikaAd@gmail.com',
    createdAt:  Date.now() / 1000,
    updatedAt:  Date.now() / 1000,
  },
  {
    firstName: 'Dimon',
    lastName: 'Dvorik',
    role: 'CLIENT',
    phone: '+380978544328',
    email: 'dvorik.dimond@gmail.com',
    createdAt:  Date.now() / 1000,
    updatedAt:  Date.now() / 1000,
},
{
  firstName: 'Vladimir',
  lastName: 'Ilin',
  role: 'CLIENT',
  phone: '+380975563422',
  email: 'vladimirilin@gmail.com',
  createdAt:  Date.now() / 1000,
  updatedAt:  Date.now() / 1000,
},
{
  firstName: 'Olga',
  lastName: 'Petrova',
  role: 'CLIENT',
  phone: '+380977775940',
  email: 'petrova.O@gmail.com',
  createdAt:  Date.now() / 1000,
  updatedAt:  Date.now() / 1000,
},
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
