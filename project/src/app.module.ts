import { Module } from '@nestjs/common';
import { EstudianteModulo } from 'estudiante/estudiante.modulo';
import { MateriaModulo } from 'materia/materia.modulo';
import { Autorizacion } from './autorizacion.controller';
@Module(
    {
        imports: [EstudianteModulo, MateriaModulo],
        controllers: [Autorizacion],
    })
export class AppMOdule{
}