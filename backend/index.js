import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/users.js';

const app = express();
const port = 5000;

app.use(bodyparser.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/',userRoutes);

app.get('/', (req,res) => res.send('Hello From Express'));
app.all('*',(req,res)=> res.send('This route doesn`t exist'));
app.listen(port,()=> console.log(`Server Connected to http://localhost:${port}`));
