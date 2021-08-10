const { Schema } = require('mongoose');

const classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    time: {
        type: Date,
        min: 2020,
        max: 3000,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    building: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    classroom: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    }
})