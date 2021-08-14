'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('games', { 
      id:{ 
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement:true,
         allowNull:false
      
      },
      studio_id:{
        type: Sequelize.INTEGER,
        allowNull:{model: "studios", key:"id"},
        update:"CASCADE",
        onDelete:"CASCADE"
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
      }
    });
     
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('games');
     
  }
};
