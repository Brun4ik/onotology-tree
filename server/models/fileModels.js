const {Example} = require('models')
const {file_1, file_2, file_3, file_4, file_5, file_6, file_7, file_8} = require('../data/readfiles')

Example.create({
    //id: 1,
    name: "Массивы",
    description: "Создание и использование массивов в C#",
    text: file_1
}).then()



Example.create({
    //id: 2,
    name: "Наследование",
    description: "Наследование в C#",
    text: file_2
}).then()


Example.create({
    // id: 3,
    name: "Делегаты и события в C#",
    description: "Делегаты и события в C#",
    text: file_3
}).then()



Example.create({
    //id: 4,
    name: "Обращение к компонентам класса",
    description: "Делегаты и события в C#",
    text: file_4
}).then()


Example.create({
    // id: 5,
    name: "Полиморфизм в иерархии классов",
    description: "Полиморфизм в иерархии классов в C#",
    text: file_5
}).then()


Example.create({
    //id: 6,
    name: "Пример делегатов",
    description: "Пример делегатов в C#",
    text: file_6
}).then()


Example.create({
    //id: 7,
    name: "Свойства и индексаторы",
    description: "Свойства и индексаторы в C#",
    text: file_7
}).then()


Example.create({
    //id: 8,
    name: "Тип как параметр",
    description: "Тип как параметр в C#",
    text: file_8
}).then()

