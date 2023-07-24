const { ServiceModel: ServiceModel } = require('../models/Service.js')

const serviceController = {

    create: async(req, res) => {

        try {
            const service = {
                "nome": req.body.nome,
                "description": req.body.description,
                "price": req.body.price,
                "image": req.body.image
            }

            const response = await ServiceModel.create(service);

            res.status(201).json({response, msg: 'create service sucessfully '})

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {

        try {
            
            const services = await ServiceModel.find();

            res.json(services);

        } catch (error) {
            console.log(error);
        }

    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({msg: 'service not found'});
                return;
            }

            res.json(service);

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {

        try {
            
            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if(!service){
                res.status(404).json({msg: 'service not found'})
                return
            }

            const deleteService = await ServiceModel.findByIdAndDelete(id);

            res.status(200).json({deleteService, msg: 'delete service sucessfully 😉'})


        } catch (error) {
            console.log(error)
        }

    },
    update: async(req, res) => {

        const id = req.params.id

        const service = {
            nome: req.body.nome,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }

        const updateService = await ServiceModel.findByIdAndUpdate(id, service);

        if(!updateService){
            res.status(404).json({msg: 'service not found'});
            return;
        }
        

        res.status(200).json({service ,msg: 'update service sucessfully'})

    }

};

module.exports = serviceController