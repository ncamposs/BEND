import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema ({
        name: {
            type: String,
            require: [true, 'obligatorio']
        },
        descripcion: {
            type:   String,
            required: true
        },
        UsuarioId: {
            type: String
        },
        date: {
            type: Date,
            default: DateNow
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