import { UsuarioSchema } from "./schemas/usuario.schema";
import { Connection } from 'mongoose';
export const UsuarioProvider = [
    {
        provide: 'USUARIO_MODEL',
        useFactory: (connection: Connection) => connection.model('Usuario', UsuarioSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];