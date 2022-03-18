const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:3000'
}))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to mongodb
require('./config/db')();
app.use(require('./routes'));

app.listen(port, () => {
    console.log(`App is avaiable at http://localhost:${port}`);
});
