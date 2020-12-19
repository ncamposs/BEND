import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema ({
        nombre: {
            type: String,
            require: [true, 'obligatorio']
        },
        descripcion: {
            type:   String,
            required: true
        },
        usuarioId: {
            type: String
        },
        date: {
            type: Date,
            default: Date
        },
        activo: {
            type: Boolean,
            default: true
        }
},{
    timestamps: true,
    versionKey: false
})

const Nota = mongoose.model ('Nota', notaSchema);
export default Nota;