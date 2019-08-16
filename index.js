'use strict';
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const wordList = require('./word.json');
const HangmanService = require('./hangman-service');

const app = express();

const pg = require('pg');
const Pool = pg.Pool;

let useSSL = false;
const local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/hangman';

const pool = new Pool({
    connectionString,
    ssl: useSSL
});

const hangmanService = HangmanService(pool);

app.use(session({
    secret: 'yikes',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

const handlebarSetup = exphbs({
    partialsDir: './views',
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.RELOAD_DATA) {
    console.log('About to reload data');
    hangmanService.reloadData(wordList);
} else {
    console.log('Data not reloaded');
};

app.get('/', (req, res) => {
    res.send('Hello world');
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('App started on port:', PORT);
});
