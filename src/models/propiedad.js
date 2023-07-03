const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Propiedad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Jugador, {
        foreignKey: 'idJugador',
      });
      this.belongsTo(models.Casilla, {
        foreignKey: 'idCasilla',
      });
    }
  }
  Propiedad.init({
    idCasilla: DataTypes.INTEGER,
    idJugador: DataTypes.INTEGER,
    color: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    renta: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Propiedad',
  });
  return Propiedad;
};
