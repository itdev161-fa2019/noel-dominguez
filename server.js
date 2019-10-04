import express from 'express';
import connectDatabase from './config/db';

const app = express();

//connect db
connectDatabase();

//configure middleware
app.use(express.json({ extended: false}));

//API endpoints
/**
 * @route GET /
 * @desc test end point
 */

app.get('/', (req, res) =>
    res.send('http get reuest sent to root api endpoint')
    );
/**
 * @route POST api/user
 * @desc Register user
 */
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
}

//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));