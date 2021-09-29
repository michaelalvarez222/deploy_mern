const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets)
    app.post("/api/pet/create", PetController.createNewPet)
    app.get("/api/pet/:id", PetController.findOnePet)
    app.put("/api/pet/:id", PetController.updatePet)
    app.delete("/api/pet/:id", PetController.deletePet)
}