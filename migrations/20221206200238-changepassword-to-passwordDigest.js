'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'password', 'passwordDigest')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn( 'users', 'passwordDigest', 'password')
  }
};
