const mongoose = require('mongoose');

const connectDatabase=()=>{
  mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  serverSelectionTimeoutMS: 30000, // Example: Extend timeout to 30 seconds
  socketTimeoutMS: 45000 
  }).then((data)=>{
    console.log(`Database Connected to server:6000`);
  }).catch((error)=>{
    console.log( error);
  })
}
module.exports=connectDatabase;