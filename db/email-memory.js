const uuidv1 = require('uuid/v1');

var Logger = require('../utils/logger')

var emails = []
var drafts = []

module.exports = {

    all: function () {
        return emails
    },

    drafts: function () {
        return drafts
    },

    add: function (email) {
        email.id = uuidv1()
        emails.push(email)
        Logger.log('Email added.')
    },

    addAsDraft: function (draft) {
        draft.id = uuidv1()
        drafts.push(draft)
        Logger.log('Draft saved.')
    },

    editDraft: function (_draft) {
        for (let i = 0; i < drafts.length; i++) {
            if (drafts[i].id !== _draft.id) {
                continue
            }
            drafts[i] = _draft
            Logger.log('Draft edited.')

            return
        }

        Logger.log('Draft not found.')
    },

    delete: function (id) {
        emails = emails.filter(email => email.id !== id);
        Logger.log('Email deleted.')
    },

    deleteDraft: function (id) {
        drafts = drafts.filter(email => email.id !== id);
        Logger.log('Draft deleted.')
    },

    checkById: function (id) {
        return emails.filter(email => email.id === id).length
    },
    checkByIdForDraft: function (id) {
        return drafts.filter(draft => draft.id === id).length
    }
}

