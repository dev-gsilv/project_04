const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, services) => sum + service.price, 0)

    if (priceSum > budget){
        return false
    }

    return true;
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
            };

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                res.status(406).json({msg: "O seu orçamento é insuficiente!"})
                return
            }

            const response = await PartyModel.create(party);
            res.status(201).json({response, msg :"Festa criada com sucesso!"});

        } catch (error) {
            console.log(error)            
        }
    },/*
    getAll: async (req, res) => {
        try {
            const parties = await partyModel.find();
            res.json(parties);
        } catch (error) {
            console.log(error)            
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await partyModel.findById(id);

            if (!party){
                res.status(404).json({msg: "Serviço não encontrado."})
                return;
            }

            res.json(party)

        } catch (error) { console.log(error)
            
        }
    },
    delete: async (req,res) => {
        try {
            const id = req.params.id;
            const party = await partyModel.findById(id);

            if (!party){
                res.status(404).json({msg: "Serviço não encontrado."})
                return;
            }

            const deleteparty = await partyModel.findByIdAndDelete(id)
            res
                .status(200)
                .json ({deleteparty, msg: "Serviço excluído com sucesso."})

        } catch (error) { console.log(error)
            
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const party = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        };

        const updatedparty = await partyModel.findByIdAndUpdate(id, party)

        if (!updatedparty){
            res.status(404).json({msg: "Serviço não encontrado."})
            return;
        }

        res.status(200).json({party, msg: "Serviço atualizado com sucesso."})
    }
    */
};


module.exports = partyController;