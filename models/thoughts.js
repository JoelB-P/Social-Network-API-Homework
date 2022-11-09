const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')
const reaction = require('reactions')

var schema = new Schema (
    {
        toughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createAtVal => dateFormat(createAtVal)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            reaction
        ]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;