const { Model, DataTypes } = require("sequelize");

class Studio extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            city:DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Games,{ foreignKey:"studio_id", as: "games"})
    }

}

module.exports = Studio;