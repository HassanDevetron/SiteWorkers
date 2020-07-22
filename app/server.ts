import Express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {connect} from 'mongoose';
import {buildSchema} from 'type-graphql';
import 'reflect-metadata';

// take care of the resolvers
import {WorkerResolver} from './resolvers/worker';

//main method
const main = async () => {

//cron

//schema
const schema = await buildSchema({
    resolvers: [WorkerResolver],
    emitSchemaFile: true,
    validate: false
});    

//create a mongoose connection
const mongoose = await connect('mongodb://localhost:27017/test',{useNewUrlParser: true} );
await mongoose.connection;

//apollo config
const server = new ApolloServer({schema});

//take care of express
const app = Express();

//apply middleware
server.applyMiddleware({app});

//listen the server on port 3333
app.listen({port: 3333}, () => {
    console.log(`server listening at http://localhost:3333${server.graphqlPath}`);
});
};
main().catch((error)=>{
    console.log(error, 'error');
})




