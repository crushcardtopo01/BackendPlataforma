'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    nombre: DataTypes.STRING,
		correo_electronico: DataTypes.STRING,
		contrasena: DataTypes.STRING,
		activo: DataTypes.BOOLEAN,
		fecha_hora_creacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps:false,
    tableName: 'usuarios'

  });
  return Usuario;
};