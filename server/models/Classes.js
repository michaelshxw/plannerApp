const { Schema } = require('mongoose');

const classSchema = new Schema({
    className: {
        type: String,
        required: true
    },
    teacherName: {
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
    roomNumber: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    } 
})