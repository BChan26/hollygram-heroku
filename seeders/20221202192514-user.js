'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        userName: "Santa Claus",
        fullName: "Tim Allen",
        passwordDigest: "naughtyornice",
        email: "saintnick@christmas.com",
        profilePic: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/The-Santa-Clauses-Trailer-Tim-Allen-Disney-Plus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
        }
        
      ]
     return queryInterface.bulkInsert('users', users)

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
