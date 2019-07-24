const express = require('express');
const bodyParser = require('body-parser');
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';
import schema from './schemas/schema';

const app = express();
mongoose.connect('mongodb://localhost/graphql');

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('Connection to database is succesful');
})
app.get('/graphiql', graphiqlExpress({
	endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.listen(3001, () => {
	console.log('Server is running at port: ', 3001);
});
