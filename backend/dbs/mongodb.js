const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

database = 'nace_fin_users';
mongoose
  .connect(
    // change for server
    "mongodb://localhost:27017/" + database,
    // "mongodb+srv://snavtechnologies:" + process.env.MONGO_ATLAS_PW + "@cluster0-naiyg.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  ) 
  .then(() => { 
    console.log('MongoDB Success: ' + database + ' connected');

  })
  .catch(() => {
    console.log("Connection to MongoDB failed!");
  });