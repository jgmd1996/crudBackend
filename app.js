const express = require('express');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');


const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(cookieparser());
app.use(express.json());
app.use(routes);

let mongoDB = 'mongodb://localhost:27017/crudBackend';
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then( () => {
      console.log('Connected to database ')
    })
    .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });

    app.listen(3000, '0.0.0.0', () => {
        console.log("Backend listening at http://localhost:${port}");
      });
      
      