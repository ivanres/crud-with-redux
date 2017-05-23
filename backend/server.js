import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

const port = 8080;

app.listen(port, () => console.log(`Server is running on localhost:${port}`));