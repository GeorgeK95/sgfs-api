var Logger = require('../utils/logger')

var CarUtils = require('../utils/car-validator')
var StudentUtils = require('../utils/student-validator')
var EmailUtils = require('../utils/email-validator')

var carsDb = require('../db/cars-memory')
var studentsDb = require('../db/students-memory')
var emailsDb = require('../db/email-memory')

module.exports = function (app) {

    app.get("/", (req, res, next) => {
        res.status(200).send()
    })

    app.get("/v1/cars", (req, res, next) => {
        res.status(200).send(carsDb.all())
    })

    app.post("/v1/car", (req, res, next) => {
        var car = req.body
        Logger.log(car)

        let carValidation = CarUtils.validate(car);
        Logger.log(carValidation)

        if (carValidation !== 'Car is valid.') {
            res.status(400).send(carValidation)
            return
        }

        carsDb.add(car)

        res.status(200).send(car)
    })

    app.put("/v1/car", (req, res, next) => {
        var car = req.body
        Logger.log(car)

        let carValidation = CarUtils.validateEdit(car);
        Logger.log(carValidation)

        if (carValidation !== 'Car is valid.') {
            res.status(400).send(carValidation)
            return
        }

        var carId = car.id

        if (carsDb.checkForById(carId) === 0) {
            res.sendStatus(404)
            return
        }

        carsDb.edit(car)

        res.status(200).send(car)
    })

    app.delete("/v1/car", (req, res, next) => {
        var carId = req.body.id

        if (carsDb.checkForById(carId) === 0) {
            res.sendStatus(404)
            return
        }

        carsDb.delete(carId)

        res.status(200).send(carId)
    })

    app.get("/v1/students", (req, res, next) => {
        res.status(200).send(studentsDb.all())
    })

    app.post("/v1/student", (req, res, next) => {
        var student = req.body
        Logger.log(student)

        let studentValidation = StudentUtils.validate(student);
        Logger.log(studentValidation)

        if (studentValidation !== 'Student is valid.') {
            res.status(400).send(studentValidation)
            return
        }

        studentsDb.add(student)

        res.status(200).send(student)
    })

    app.put("/v1/student", (req, res, next) => {
        var student = req.body
        Logger.log(student)

        let studentValidation = StudentUtils.validateEdit(student);
        Logger.log(studentValidation)

        if (studentValidation !== 'Student is valid.') {
            res.status(400).send(studentValidation)
            return
        }

        var studentId = student.id

        if (studentsDb.checkById(studentId) === 0) {
            res.sendStatus(404)
            return
        }

        studentsDb.edit(student)

        res.status(200).send(student)
    })

    app.delete("/v1/student", (req, res, next) => {
        var carId = req.body.id

        if (studentsDb.checkById(carId) === 0) {
            res.sendStatus(404)
            return
        }

        studentsDb.delete(carId)

        res.status(200).send(carId)
    })

    app.get("/v1/emails", (req, res, next) => {
        res.status(200).send(emailsDb.all())
    })

    app.get("/v1/email/drafts", (req, res, next) => {
        res.status(200).send(emailsDb.drafts())
    })

    app.post("/v1/email", (req, res, next) => {
        var email = req.body
        Logger.log(email)

        let emailValidation = EmailUtils.validate(email);
        Logger.log(emailValidation)

        if (emailValidation !== 'Email is valid.') {
            res.status(400).send(emailValidation)
            return
        }

        emailsDb.add(email)

        res.status(200).send(email)
    })

    app.delete("/v1/email", (req, res, next) => {
        var emailId = req.body.id

        if (emailsDb.checkById(emailId) === 0) {
            res.sendStatus(404)
            return
        }

        emailsDb.delete(emailId)

        res.status(200).send(emailId)
    })

    app.post("/v1/email/draft", (req, res, next) => {
        var email = req.body
        Logger.log(email)

        emailsDb.addAsDraft(email)

        res.status(200).send(email)
    })

    app.put("/v1/email/draft", (req, res, next) => {
        var draft = req.body
        Logger.log(draft)

        var draftId = draft.id
        if (draftId == null || emailsDb.checkByIdForDraft(draftId) === 0) {
            res.sendStatus(404)
            return
        }

        emailsDb.editDraft(draft)

        res.status(200).send(draft)
    })

    app.delete("/v1/email/draft", (req, res, next) => {
        var emailId = req.body.id

        if (emailsDb.checkByIdForDraft(emailId) === 0) {
            res.sendStatus(404)
            return
        }

        emailsDb.deleteDraft(emailId)

        res.status(200).send(emailId)
    })

    /*app.post("/v1/register", (req, res, next) => {
        var user = req.body
        Logger.log(user)

        let userValidation = CarUtils.validateCar(user);
        Logger.log(userValidation)

        if (userValidation !== 'User is valid.') {
            res.status(400).send(userValidation)
            return
        }

        res.status(200).send(user)
    })*/

    return app
}