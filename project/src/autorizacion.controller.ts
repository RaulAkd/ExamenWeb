import {Controller, Body, Get, Post, Req, Res, HttpException, HttpStatus} from '@nestjs/common';

@Controller('Autorizacion')
export class Autorizacion {
    @Post('iniciarSesion')
    iniciarSesion(@Body() bodyParams, @Req() request, @Res() response){
        const usuario = bodyParams.usuario;
        const password = bodyParams.password;
        if (usuario === 'adrianeguez' && password === '12345678910'){
            response.cookie('token', 'adrianeguez').send({message: 'OK'});
        }else{
            response.send('usuario incorrecto');
        }
    }

    @Post('cerrarSesion')
    cerrarSesion(@Res() response, @Req() request){
        const cookie = request.cookies.token;
        response.clearCookie('token').send({message: 'Usted ha salido del sistema'});
    }
}