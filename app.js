const express = require('express')
const compression = require('compression');
const path = require('path');

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const indexRouter = require('./routes/index')(messages);
const messageRouter = require('./routes/messages')(messages);

const app = express()
app.use(compression()); // Compresses res body (gzip, etc.)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', indexRouter)
app.use('/new', messageRouter)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3001;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`form app - listening on port ${PORT}!`);
});
