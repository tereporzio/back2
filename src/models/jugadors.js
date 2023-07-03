const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Juego, {
        foreignKey: 'idJuego',
      });
      this.belongsTo(models.Tablero, {
        foreignKey: 'idTablero',
      });
      this.hasMany(models.Propiedad, {
        foreignKey: 'id',
      });
      this.belongsTo(models.Casilla, {
        foreignKey: 'idCasilla',
      });
    }
  }
  Jugador.init({
    ficha: DataTypes.STRING,
    colorPropiedades: DataTypes.STRING,
    cantidadPropiedades: DataTypes.INTEGER,
    dinero: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    idJuego: DataTypes.INTEGER,
    idTablero: DataTypes.INTEGER,
    idCasilla: DataTypes.INTEGER,
    turno: DataTypes.INTEGER,
    posicion: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Jugador',
  });
  return Jugador;
};
