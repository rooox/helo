require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
const PORT = 4051;
const app = express();

const {CONNECTION_STRING} = process.env;


app.use(bodyParser.json());
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.post('/auth/register', ctrl.createUser)
app.post('/auth/login', ctrl.login)

app.listen(PORT, ()=> {
    console.log(`Ship is docked on port ${PORT}`)
})