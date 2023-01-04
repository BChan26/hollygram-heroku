'use strict';
const falso = require('@ngneat/falso')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let posts = [...Array(10)].map(() => ({
      picture: falso.randImg(),
      //postText: falso.randPhrase({length:10}),
      likes: falso.randNumber({min:0, max: 100}),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('posts', posts)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts')
  }
};
