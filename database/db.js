import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@crud-app-shard-00-00.7mcfc.mongodb.net:27017,crud-app-shard-00-01.7mcfc.mongodb.net:27017,crud-app-shard-00-02.7mcfc.mongodb.net:27017/?ssl=true&replicaSet=atlas-bpm8a2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=crud-app`;

    try{

       await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser: true });
       console.log('Database connected successfully');
    } catch(error){
        console.log(`Error while connecting database ${error}`)
    }
}

export default Connection;