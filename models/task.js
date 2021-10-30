const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    date: {
        type: Date,
    }
});

const TaskList = mongoose.model('TaskList', taskSchema); //

module.exports = TaskList;