const { BasketDevice, Basket, User, Device } = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController{
    async create(req, res){
        const {email, deviceId} = req.query
        const user = await User.findOne({where:{
            email
        }})
        const {id} = user
        const basket = await BasketDevice.create({basketId:id, deviceId})
        return res.json(basket)
    }

    async getAll(req, res){
        const {email} = req.query
        const user = await User.findOne({where:{
                email
        }})
        const {id} = user
        const basket = await BasketDevice.findAll({where:{
            basketId: id
        },
        include: [{model: Device, as: 'device'}]}
        )
        return res.json(basket)
    }

    async remove(req, res){
        const {email, deviceId} = req.query
        const user = await User.findOne({where:{
            email
        }})
        const {id} = user
        const basket = await BasketDevice.destroy({where:{basketId:id, deviceId}})
        return res.json(basket)
    }
}

module.exports = new BasketController()

