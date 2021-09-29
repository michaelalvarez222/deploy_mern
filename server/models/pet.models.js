const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required round hea!"]
    },
    type: {
        type: String,
        required: [true, "Open to all animals, whats yours?"]
    },
    description: {
        type: String,
        required: [true, "Description of pet is required"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;