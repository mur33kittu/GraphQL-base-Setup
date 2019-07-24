import mongoose from 'mongoose';
import uuid from 'node-uuid';

const schema = mongoose.Schema;

const personSchema = new schema({
    id: {type: String, default: uuid.v1},
    age: Number,
    name: String,
    gender: String,
    books: [String]
})

const model = mongoose.model('person', personSchema)

export default model;
