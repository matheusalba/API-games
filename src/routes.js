const express = require("express");

const routes = express.Router();

const StudioController = require("./controllers/StudioController");
const GamesController = require("./controllers/GamesController");


routes.get("/home",(req,res)=>{
    return res.json({teste:"teste"})
})

routes.post("/studio", StudioController.store);
routes.get("/studio", StudioController.show);

routes.post("/games/:studio_id", GamesController.store);
routes.get("/games/:studio_id", GamesController.show);
routes.get("/games", GamesController.showAll);

module.exports = routes;