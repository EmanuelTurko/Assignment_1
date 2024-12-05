const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const postsRouter = require('./routing/post_routes');

app.use('/' , postsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});