import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'


const app = express();
const uri = 'mongodb://localhost:27017/Bend';

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

//Conexion a Mongodb
mongoose.connect(uri, options).then ( 
    () => {
        console.log('Connect to Mongodb')
    },
    err => {
        err
    }
)

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


//Rutas
app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/api', require ('./routes/nota'));


//middlewares para Vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')));

app.set('PORT', process.env.PORT || 3000)

app.listen(app.get('PORT'), () => {
    console.group('Puerto escuchando', app.get('PORT'))
})
