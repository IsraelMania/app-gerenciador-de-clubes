import { allow } from "joi";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      home_team_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      home_team_goals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      away_team_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      away_team_goals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      in_progress: {
        type: DataTypes.BOOLEAN
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('matches');
  }
};