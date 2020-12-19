import express from 'express';
const router = express.Router();

import Nota from '../models/nota';


//Crear una nota
router.post('/nota-nueva', async (req, res) => {
    const body = req.body;
    try {
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        })
    }
})

//buscar una sola nota
router.get('/nota/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const notaDB = await Nota.findOne ({_id});
        res.status(200).json(notaDB)
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        })    
    }
})

//obtener todas las notas
router.get('/nota/', async (req, res) => {
    try {
        const notaDB = await Nota.find ();
        res.status(200).json(notaDB)
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        })    
    }
})

//Borrar las notas por id
router.delete('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findByIdAndDelete({_id});
        if(!notaDB) {
            return res.status(400).json({
                mensaje: 'No se encontro la nota',
                error
            })
        }
        res.json(notaDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

//Actualizar un nota
router.put('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;

    try {
        const notaBD = await Nota.findByIdAndUpdate(
            _id,
            body,
            {new: true}
        );
        res.json(notaBD) 
    } catch (error) {
        return res.status(500).json({
            mesaje: 'Ocurrio un error',
            error
        })
    }
})

module.exports = router;