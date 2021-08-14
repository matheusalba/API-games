const {Model, DataTypes} = require("sequelize");

class Games extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Studio, {foreignKey:"studio_id", as:"studio"})
    }
}

module.exports = Games;