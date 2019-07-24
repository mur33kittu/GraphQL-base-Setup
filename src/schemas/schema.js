import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import resolvers from './../resolvers/resolver';
const typeDefs = `type Person {
        id: String,
        age: Int
        name: String
        gender: String
        books: [String]
    }

    type Query {
        persons(age: Int): [Person],
        person(id: String): Person
    }
    type Mutation {
        addPerson(age: Int, name: String, gender: String, books: [String]): Person
        deletePerson(id: String!): Person
        updatePerson(id: String!, name: String!): Person
    }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema })

export default schema;