const partyModel = require('../models/Party.js')

const partyCheckBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0)

    if(priceSum > budget) {
        return false
    }

    return true
}

const partyController = {
    create: async(req, res) => {
        
        try {

        const party = {
            
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            budget: req.body.budget,
            image: req.body.image,
            services: req.body.services,
        }


        if(party.services && !partyCheckBudget(party.budget, party.services)) {
            res.status(406).json({msg: 'Your budget is insufficient'})
            return 
        }

        const response = await partyModel.create(party)

        res.status(201).json({response, msg: 'create party sucessfully'})

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req, res) => {

        try {
            
            const parties = await partyModel.find()

            res.json(parties);

        } catch (error) {
            console.log(error)
        }

    },
    get: async(req, res) => {

        try {
            
            const id = req.params.id;

            const party = await partyModel.findById(id)

            if(!party) {
                res.status(404).json({msg: 'party not found'})
                return
            }

            res.json(party)


        } catch (error) {
            console.log(error)
        }

    },
    delete: async(req, res) => {

        try {
            
            const id = req.params.id

            const party = await partyModel.findById(id)

            if(!party) {
                res.status(404).json({msg: 'party not found'})
                return
            }

            const deleteParty = await partyModel.findByIdAndDelete(id)

            res.status(201).json({deleteParty, msg: 'delete party sucessfully'})


        } catch (error) {
            console.log(error)
        }

    },
    update: async(req, res) => {

        try {
            
            const id = req.params.id

            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

            if(party.services && !partyCheckBudget(party.budget, party.services)) {
                res.status(406).json({msg: 'Your budget is insufficient'})
                return 
            }

            const updateParty = await partyModel.findByIdAndUpdate(id, party)

            if(!updateParty){
                res.status(404).json({msg: 'party not found'})
                return
            }

            res.status(200).json({updateParty, msg: 'update party sucessfully'})

        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = partyController