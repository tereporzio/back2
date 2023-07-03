const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Casilla extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tablero, {
        foreignKey: 'id',
      });
      this.hasMany(models.Propiedad, {
        foreignKey: 'id',
      });
      this.hasMany(models.Libre, {
        foreignKey: 'id',
      });
      this.hasMany(models.Jugador, {
        foreignKey: 'id',
      });
    }
  }
  Casilla.init({
    posicion: DataTypes.STRING,
    idTablero: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Casilla',
  });
  return Casilla;
};
