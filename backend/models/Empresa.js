const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Empresa extends Model {}

Empresa.init(
  {
    nome: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Empresa",
  }
);

module.exports = Empresa;
