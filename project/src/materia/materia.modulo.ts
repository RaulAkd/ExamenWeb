import { Module } from '@nestjs/common';
import { ControladorMateria } from './materia.controlador';
import { ServicioMaterias } from './materia.servicio';

@Module({
    controllers: [ControladorMateria],
    providers: [ServicioMaterias],
},
)
export class MateriaModulo{
}