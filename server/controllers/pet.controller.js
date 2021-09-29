const Pet = require("../models/pet.models")



module.exports.findAllPets = (req,res) => {
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.createNewPet = (req,res)=>{
    Pet.create(req.body)
        .then(newPetObj=>{
            res.json({results: newPetObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOnePet = (req,res)=>{
    console.log(req.params)
    Pet.findOne({_id: req.params.id})
        .then(foundPet=>{
            res.json({results: foundPet})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updatePet = (req,res) => {
    Pet.findByIdAndUpdate(
        { _id: req.params.id},
        req.body,
        { new: true, runValidators: true } 
    )
        .then(updatedPet => {
            res.json({ user: updatedPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err=>{
            res.json({err:err})
        })

}