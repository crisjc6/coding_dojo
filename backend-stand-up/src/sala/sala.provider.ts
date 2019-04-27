
import { Connection } from 'mongoose';
import { SalaSchema } from './schemas/sala.schema';
export const SalaProvider = [
    {
        provide: 'SALA_MODEL',
        useFactory: (connection: Connection) => connection.model('Sala', SalaSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];