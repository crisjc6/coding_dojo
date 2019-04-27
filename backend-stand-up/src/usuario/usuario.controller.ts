import { UsuarioService } from './usuario.service';
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsuarioInterface } from './interfaces/usuario.interface';

@Controller('usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Cristhian',
        apellido: 'Jumbo ',
        edad: 12
    };
    constructor(
        private readonly _usuarioService: UsuarioService
    ) {
    }

    @Post('crear')
    async crear(
        @Body()usuario
    ){
        console.log('usuario',usuario);
        return await this._usuarioService.crearUsuario(usuario);
    }

    @Get()
    async buscarTodos(): Promise<UsuarioInterface[]> {
        console.log(this._usuarioService.buscarTodos());
        return this._usuarioService.buscarTodos();
    }

    @Post(':id')
    async eliminar(
        @Param('id')id 
    ){
        console.log('esta en el controlador post de elimninar')
        return this._usuarioService.eliminar(id);
    }
}
