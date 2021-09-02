const Studio = require("../models/Studio");
const Games = require("../models/Games");



module.exports = {
    async store(req,res){
    const { studio_id } = req.params;
    const { name } = req.body;
    
    const studio = await Studio.findByPk(studio_id);

    if(!studio){
        return res.status(400).json({error: "Studio not found"})
    }

    const game = await Games.create({
        name,
        studio_id
    })

    return res.json(game)
    }, 

    async show(req,res){
        const {studio_id} = req.params;

        const games = await Studio.findByPk(studio_id,{
            include:{ association: "games"}
        })

        return res.json(games)
    },

    async showAll(req,res){
        const games = await Games.findAll();

        return res.json(games);
    }

}