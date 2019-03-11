module.exports = {
    validate: function (car) {
        var make = car.make
        var model = car.model
        var price = car.price
        var imgUrl = car.imgUrl
        var engine = car.engine

        if (engine == null)
            return 'No engine provided.'

        var cubic = engine.cubic
        var hp = engine.hp

        if (make == null || make.length < 3 || make.length > 20) {
            return 'Make is either missing or not between 3 and 20 symbols.'
        }
        if (model == null || model.length < 3 || model.length > 20) {
            return 'Model is either missing or not between 3 and 20 symbols.'
        }
        if (cubic == null || cubic < 800 || cubic > 20000) {
            return 'Cubic is either missing or not between 800 and 20000 interval.'
        }
        if (price == null || price < 0) {
            return 'Price is either missing or it\'s below 0.'
        }
        if (hp == null || hp < 60 || hp > 2000) {
            return 'Hp is either missing or not between 60 and 2000 interval.'
        }
        if (imgUrl == null) {
            return 'Image url is missing.'
        }

        return 'Car is valid.'
    },

    validateEdit: function (car) {
        var carValidation = this.validate(car)

        if (carValidation === 'Car is valid.') {
            var id = car.id

            if (id == null) {
                return 'Invalid car id.'
            }
        }

        return carValidation
    }
}