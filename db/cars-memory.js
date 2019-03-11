const uuidv1 = require('uuid/v1');

var Logger = require('../utils/logger')

var cars = []

module.exports = {

    all: function () {
        return cars
    },

    add: function (car) {
        car.id = uuidv1()
        cars.push(car)
        Logger.log('Car added.')
    },

    edit: function (_car) {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id !== _car.id) {
                continue
            }
            cars[i] = _car
            Logger.log('Car edited.')

            return
        }

        Logger.log('Car not found.')
    },

    delete: function (id) {
        cars = cars.filter(car => car.id !== id);
        Logger.log('Car deleted.')
    },

    checkForById: function (id) {
        return cars.filter(car => car.id === id).length
    }
}

