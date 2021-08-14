const Sequelize = require("sequelize")

const dbConfig = require("../config/database");

const Studio = require("../models/Studio");
const Games = require("../models/Games");

const connection = new Sequelize(dbConfig);

Studio.init(connection);
Games.init(connection);

Games.associate(connection.models)
Studio.associate(connection.models)
module.exports = connection;