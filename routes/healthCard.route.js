const { addHealthCard, getHealthCard, updateHealthCard } = require("../controllers/healthCard.controller")
const { verifyToken } = require("../middlewares/authJwt")


module.exports = (app)=>{
    // add health card
    app.post("/fitness/api/v1/user/addHealthRecord",[verifyToken], addHealthCard);
    // get health card
    app.get("/fitness/api/v1/user/healthRecord",[verifyToken], getHealthCard);
    // update health card
    app.put("/fitness/api/v1/user/healthRecord", [verifyToken], updateHealthCard)
}