import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'


const app = express();

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

//middlewares para Vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')));

app.set('PORT', process.env.PORT || 3000)

app.listen(app.get('PORT'), () => {
    console.group('Puerto escuchando', app.get('PORT'))
})
