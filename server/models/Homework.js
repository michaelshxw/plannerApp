const { Schema } = require('mongoose');

const homeworkSchema = new Schema({
    homeworkId: {
        type: String,
    },
    name: {
        type: String,

    },
    class: {
        type: String, 

    },
    dueDate: {
        type: String,

    },
    taskInfo: {
        type: String,

    }
})