const uuidv1 = require('uuid/v1');

var Logger = require('../utils/logger')

var students = []

module.exports = {

    all: function () {
        return students
    },

    add: function (student) {
        student.id = uuidv1()
        students.push(student)
        Logger.log('Student added.')
    },

    edit: function (_student) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].id !== _student.id) {
                continue
            }
            students[i] = _student
            Logger.log('Student edited.')

            return
        }

        Logger.log('Student not found.')
    },

    delete: function (id) {
        students = students.filter(student => student.id !== id);
        Logger.log('Student deleted.')
    },

    checkById: function (id) {
        return students.filter(student => student.id === id).length
    }
}

