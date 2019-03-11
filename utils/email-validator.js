module.exports = {
    validate: function (email) {
        var from = email.from
        var to = email.to
        var subject = email.subject
        var content = email.content

        if (content == null)
            return 'No content provided.'

        if (from == null || from.length < 3 || from.length > 20) {
            return 'Author is either missing or not between 3 and 20 symbols.'
        }
        if (to == null || to.length < 3 || to.length > 20) {
            return 'Receiver is either missing or not between 3 and 20 symbols.'
        }
        if (content == null || content.length < 3) {
            return 'Content is either missing or it\'s below 3.'
        }

        return 'Email is valid.'
    }
}