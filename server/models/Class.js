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
    length: {
        type: String,
        required: true,
        maxLength: 3
    },
    building: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    roomNumber: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    } 
})