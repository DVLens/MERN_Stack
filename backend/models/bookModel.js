import mongoose from "mongoose";


const bookSchema = mongose.bookSchema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timespamps: true
    }
);

export const Book = mongoose.model('Cat', { name: String });