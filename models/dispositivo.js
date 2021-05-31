'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dispositivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dispositivo.init({
    usuario_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    token: DataTypes.STRING,
    fecha_hora_creacion: DataTypes.DATE,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Dispositivo',
    timestamps:false,
    tableName: "dispositivos"
  });
  return Dispositivo;
};