import * as mongoose from 'mongoose';
export const   UsuarioSchema =  new mongoose.Schema({
        nombre: String,
        apellido:  String,
        correo: String,
        cargo: String,
        
        
})