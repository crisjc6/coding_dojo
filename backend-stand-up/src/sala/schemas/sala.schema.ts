import * as mongoose from 'mongoose';
import { UsuarioSchema } from 'usuario/schemas/usuario.schema';
export const   SalaSchema =  new mongoose.Schema({
    nombre: String,
    fechaInicio: String,
    fechaTermina: String,
    miembros: [UsuarioSchema],
    admin:UsuarioSchema

})