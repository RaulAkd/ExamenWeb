import { Controller, Post, Query, Get, Body, Req, Res, Param, Put, UsePipes } from '@nestjs/common';
import { ServicioEstudiante } from './estudiante.servicio';
import { Estudiante } from './estudiante.interface';
import { request } from 'https';
import { EstudiantesPipe } from './validaciones/estudiante.pipe';
import { EsquemasValidacion } from './validaciones/esquemas.validacion';

@Controller('estudiante')
export class ControladorEstudiante{
    constructor(private servicioEstudiante: ServicioEstudiante ){
    }
    @Post('crearEstudiante')
    @UsePipes(new EstudiantesPipe(new EsquemasValidacion().esquemaEstudiante))
    /*crearautor(@Body() bodyparams, @Req() request, @Res() response){
        const id = bodyparams.id;
        const nombre = bodyparams.nombre;
        const autor = new Autor (id , nombre);
        const autoresc = this.servicioAutores.crearAutor(autor);
        response.send(this.servicioAutores.mostrarTodosLosAutores());
    }*/
    crearEstudiante(@Body() bodyParams, @Res() response){
        const id = bodyParams.id;
        const nombre = bodyParams.nombre;
        const apellido = bodyParams.apellido;
        const fechaNacimiento = bodyParams.fechaNacimiento;
        const semestreActual = bodyParams.semestreActual;
        const graduado = bodyParams.graduado;
        const estudiante = new Estudiante (id, nombre, apellido, fechaNacimiento, semestreActual, graduado);
        const autoresc = this.servicioEstudiante.crearEstudiante(estudiante);
        response.send(this.servicioEstudiante.mostrarTodosLosEstudiantes());

    }
    @Get('mostrarEstudiante')
    mostrarEstudiantes(){
        return this.servicioEstudiante.mostrarTodosLosEstudiantes();
    }

    @Get('obtenerEstudiante/:id')
    obtenerEstudiante(@Param() paramParameters, @Res() response){
        const estudiante = this.servicioEstudiante.mostrarEstudiantePorId(paramParameters.id);
        response.send(estudiante);

    }
    @Put('actualizar_por_id/:id')
    actualizar_por_id(@Param() paramParams, @Res() response, @Body() bodyparams){
        const modificarEstudiante = this.servicioEstudiante.modificarEstudianteId(paramParams.id, bodyparams.nombre,
            bodyparams.apellido, bodyparams.fechaNacimiento, bodyparams.semestreActual, bodyparams.graduado);
        response.send(this.servicioEstudiante.mostrarTodosLosEstudiantes());
    }
}