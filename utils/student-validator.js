module.exports = {
    validate: function (student) {
        var fName = student.firstName
        var lName = student.lastName
        var facNum = student.facNumber
        var imgUrl = student.imgUrl
        var grades = student.grades

        if (grades == null)
            return 'No grades provided.'

        if (fName == null || fName.length < 3 || fName.length > 20) {
            return 'First name is either missing or not between 3 and 20 symbols.'
        }
        if (lName == null || lName.length < 3 || lName.length > 20) {
            return 'Last name is either missing or not between 3 and 20 symbols.'
        }
        if (facNum == null || facNum < 0) {
            return 'Faculty number is either missing or it\'s below 0.'
        }
        if (imgUrl == null) {
            return 'Image url is missing.'
        }

        for (let i = 0; i < grades.length; i++) {
            var grade = grades[i]

            var subject = grade.subject
            var mark = grade.mark

            console.log(grade)

            if (mark == null || mark < 2 || mark > 6) {
                return 'Mark is either missing or not between 2 and 6.'
            }

            if (subject == null || subject.length < 3 || subject.length > 20) {
                return 'Subject is either missing or not between 3 and 20 symbols.'
            }
        }

        return 'Student is valid.'
    },

    validateEdit: function (student) {
        var studentValidation = this.validate(student)

        if (studentValidation === 'Student is valid.') {
            var id = student.id

            if (id == null) {
                return 'Invalid student id.'
            }
        }

        return studentValidation
    }
}