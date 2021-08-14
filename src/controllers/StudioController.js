const Studio = require("../models/Studio");

module.exports = {
    async store(req,res){
        const {name, city} = req.body;

        const studio = await Studio.create({name, city})

        return res.json(studio);
    },

    async show(req,res){
        const studios = await Studio.findAll();

        return res.json(studios);
    }
}