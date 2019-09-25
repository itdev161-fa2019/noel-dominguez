import express from 'express';
import connectDatabase from './config/db';

const app = express();

connectDatabase();

app.get('/', (req, res) =>
    res.send('http get reuest sent to root api endpoint')
    );

app.listen(3000, () => console.log('Express server running on port 3000'));