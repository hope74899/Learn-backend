import mongoose from 'mongoose'

const studentschema = new mongoose.Schema({
    regNo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    department: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    }
})

export const Student = mongoose.model('Student', studentschema)

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        maxlength: 25
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15
    }
});

export const User = mongoose.model('User', userSchema);

