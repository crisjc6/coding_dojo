import { CrearUsuarioDto } from './dto/usuario.dto';
import { UsuarioInterface } from './interfaces/usuario.interface';
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
@Injectable()
export class UsuarioService {
    constructor(@Inject('USUARIO_MODEL') private readonly usuarioModel: Model<UsuarioInterface>) {
        
    }
    async crearUsuario(usuario:CrearUsuarioDto):Promise<UsuarioInterface>{
        const crearUsuario = new this.usuarioModel(usuario);
        return await crearUsuario.save();

    }

    async buscarTodos():Promise<UsuarioInterface[]>{
        return await this.usuarioModel.find().exec();   
    }

    async eliminar(nombre:number):Promise<any>{
        return await this.usuarioModel.deleteOne({nombre})}
}
