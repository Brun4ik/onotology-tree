const sequelize = require('../db')
const {DataTypes}= require('sequelize')
const {file_1} = require('../data/readfiles')
const Example = sequelize.define('example', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    parent_id: {type: DataTypes.INTEGER, foreignKey: true},
    text: {type: DataTypes.TEXT}
})

// Example.create({
//     // id: 3,
//     name: "Делегаты и события",
//     description: "",
//     parent_id: 0,
// }).then()
//
// Example.create({
//     // id: 3,
//     name: "Классы",
//     description: "",
//     parent_id: 0
// }).then()
//
// Example.create({
//     // id: 3,
//     name: "Коллекции",
//     description: "",
//     parent_id: 0
// }).then()
//
// Example.create({
//     // id: 3,
//     name: "Массивы",
//     description: "",
//     parent_id: 0
// }).then()
//
// Example.create({
//     // id: 3,
//     name: "Наследование",
//     description: "",
//     parent_id: 0
// }).then()
//
// Example.create({
//     // id: 3,
//     name: "Синхронизация процессов",
//     description: "",
//     parent_id: 0
// }).then()
//
// Example.create({
//     // id: 3,
//     name: "Тип как параметр",
//     description: "",
//     text: file_8,
//     parent_id: 0
// }).then()



module.exports = {Example}

