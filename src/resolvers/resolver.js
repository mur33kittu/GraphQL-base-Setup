import mongoose from 'mongoose';
import PersonModel from './../../models/person';

const persons = [{
    id: "1",
    name: "Murthy",
    age: 33,
    gender: "Male",
    books: ["C", "C++", "Javascript"]
},
    {
    id: "2",
    name: "Suchi",
    age: 27,
    gender: "Female",
    books: ["C", "C++", "Javascript"]
},
    {
    id: "3",
    name: "Lokesh",
    age: 30,
    gender: "Male",
    books: ["C", "C++", "Javascript"]
}];

const resolvers = {
    Query: {
        persons: (root, {age}) => {
            return PersonModel.find({age: age})
            // return persons
        },
        person: (root, {id}) => {
            return PersonModel.findOne({id: id})
        }
    },    
    Mutation: {
        addPerson: (root, { age, name, gender, books }) => {
            const person = new PersonModel({
                age: age, name: name, gender: gender, books: books
            });
            return person.save();
        },
        deletePerson: (root, { id }) => {
            return PersonModel.findOneAndRemove({ id: id });
        },
        updatePerson: (root, { id, name }) => {
            return PersonModel.findByIdAndUpdate({ id: id , name: name });
        }
    }
}

export default resolvers;
