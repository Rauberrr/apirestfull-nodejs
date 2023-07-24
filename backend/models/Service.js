const mongoose = require('mongoose')

const {Schema} = mongoose;

const ServiceSchema = new Schema({
        nome: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true

        },
    }, 
            {timestamps: true} // Create date of Register and update
);

const ServiceModel = mongoose.model('Service', ServiceSchema)

module.exports = {
    ServiceModel, ServiceSchema
}