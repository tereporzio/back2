const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      this.hasMany(models.Jugador, {
        foreignKey: 'id',
      });
    }
  }

  Usuario.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'El nombre de usuario no puede ser nulo',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'La contraseña no puede ser nula',
          },
          len: {
            args: [3, 255],
            msg: 'La contraseña debe tener al menos 3 caracteres',
          },
        },
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'El mail no puede ser nulo',
          },
          isEmail: {
            msg: 'El mail debe tener un formato de dirección de correo electrónico válido',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
    },
  );

  return Usuario;
};
