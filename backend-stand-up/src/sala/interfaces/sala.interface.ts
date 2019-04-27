import { Document } from 'mongoose';
export interface SalaInterface extends Document {
    nombre: string;
    fechaInicio: string;
    fechaTermina:string;
    miembros: string;
    admin:string;   

}