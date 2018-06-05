import { Module } from '@nestjs/common';
import { ControladorEstudiante } from './estudiante.controlador';
import { ServicioEstudiante } from './estudiante.servicio';

@Module({
    controllers: [ControladorEstudiante],
    providers: [ServicioEstudiante],
},
)
export class EstudianteModulo{

}