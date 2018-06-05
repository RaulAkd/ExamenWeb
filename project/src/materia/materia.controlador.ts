import { Controller, Post, Body, Res, Req, Get, Param, Put, UsePipes } from '@nestjs/common';
import { ServicioMaterias } from './materia.servicio';
import { Materia } from './materia.interface';
import { MateriaPipe } from './validaciones/materia.pipe';
import { EsquemasValidacionMateria } from './validaciones/esquemas.validacionMateria';

@Controller('materias')
export class ControladorMateria{
    constructor(private servicioMateria: ServicioMaterias){
    }
    @Post('crearMateria')
    @UsePipes(new MateriaPipe(new EsquemasValidacionMateria().esquemaMateria))
    crearMateria(@Body() bodyparams, @Res() response, @Req() request){
        const id = bodyparams.id;
        const nombre = bodyparams.nombre;
        const semestre = bodyparams.semestre;
        const materia = new Materia(id, nombre, semestre);
        const materiasc = this.servicioMateria.crearMateria(materia);
        response.send(this.servicioMateria.mostrarTodasLasMaterias());
    }
    @Get('mostrarMateria')
    mostrarMateria(){
        return this.servicioMateria.mostrarTodasLasMaterias();
    }
    @Get('obtenerMateria/:id')
    obtenerMateria(@Param() paramParameters, @Res() response){
        const materia = this.servicioMateria.mostrarMateriaPorId(paramParameters.id);
        response.send(materia);
    }
    @Put('actualizarPorId/:id')
    actualizarPorId(@Param() paraParams, @Res() response, @Body() bodyparams){
        const modificarMateria = this.servicioMateria.modificarMateria(paraParams.id, bodyparams.nombre, bodyparams.semestre);
        response.send(this.servicioMateria.mostrarTodasLasMaterias());
    }
}