const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tablero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Juego, {
        foreignKey: 'idJuego',
      });
      this.hasMany(models.Jugador, {
        foreignKey: 'id',
      });
      this.hasMany(models.Casilla, {
        foreignKey: 'id',
      });
    }
  }
  Tablero.init({
    idJuego: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tablero',
  });
  return Tablero;
};
