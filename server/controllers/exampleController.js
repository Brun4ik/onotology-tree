const ApiError = require('../error/ApiError')
const {Example, TreeExample} = require('../models/models')
const creatingFile = require('../data/readfiles')
const path = require('path')
const dirPath = path.join(__dirname, '../data/')
class ExampleController {

    async getAll(req, res) {
        const {name, description, text, parent_id} = req.body
        const example = await Example.findAll()
        return res.json(example)
    }

    async getId(req, res) {
        const {id} = req.params
        const  example = await Example.findOne(
            { where: {id}}
        )
        return res.json(example)

    }

    async create(req, res, next) {

        try {
            let { name, description, text} = req.body;
            const example = await Example.create({ name, description, text})

            if(text) {
                text = JSON.parse(text)
                text.forEach(i =>
                    Example.create({
                        text: i.text
                    }))
            }
            creatingFile.creatingFile('../data/' + example.name + '.txt', example.text, example.name)
            return res.json(example)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async updateExample(req, res) {
        const {id, text, description} = req.body
        const example = await Example.update(
            {text, description},
            {where: {id}}
        )
        return res.json(example)
    }

    async delete(req, res) {
        const {id} = req.body
        await Example.destroy(
            {where: {id}}
        )
        return res.redirect('./')

    }

    async check(req, res, next) {
        const {name} = req.query
        if(!name) {
            return next(ApiError.badRequest('Не задано Имя примера'))
        }
        res.json(name)
    }
}
module.exports = new ExampleController()