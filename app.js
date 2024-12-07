const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const port = process.env.PORT;
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT)
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postsRouter = require('./routing/post_routes');

app.use('/posts' , postsRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});