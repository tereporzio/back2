const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Jugador, {
        foreignKey: 'id',
      });
      this.hasOne(models.Tablero, {
        foreignKey: 'id',
      });
    }
  }
  Juego.init({
    ganador: DataTypes.STRING,
    numeroRondas: DataTypes.INTEGER,
    turnoActual: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Juego',
  });
  return Juego;
};
