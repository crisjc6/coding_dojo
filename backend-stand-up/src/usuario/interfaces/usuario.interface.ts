
import { Document } from 'mongoose';
export interface UsuarioInterface extends Document {
    nombre: string;
    apellido: string;
    edad: number;
}