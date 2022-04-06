import { Schema, model } from 'mongoose'

const task = new Schema({
    tittle: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true,
    versionKey: false
})



export default model('Task', task)