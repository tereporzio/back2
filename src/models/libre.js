const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Libre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Casilla, {
        foreignKey: 'idCasilla',
      });
    }
  }
  Libre.init({
    idCasilla: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    instruccion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Libre',
  });
  return Libre;
};
