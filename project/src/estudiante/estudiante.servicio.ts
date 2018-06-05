import { Injectable } from '@nestjs/common';
import { Estudiante } from './estudiante.interface';

@Injectable()
export class ServicioEstudiante{
    private estudiantes: Estudiante[]= [];

    crearEstudiante(estudiante: Estudiante){
        this.estudiantes.push(estudiante);
    }

    mostrarTodosLosEstudiantes(){
        return this.estudiantes;
    }

    mostrarEstudiantePorId(id: number){
        const indice = this.estudiantes.findIndex((Estudiante) => Estudiante.id === id);
        return this.estudiantes[indice];
    }
    modificarEstudianteId(id: number, nombre: string, apellido: string, fecha_nacimiento: string, semestreActual: number, graduado: string){
        const indice = this.estudiantes.findIndex((Estudiante) => Estudiante.id === id);
        const estudianteActualizado = new Estudiante(id, nombre, apellido, fecha_nacimiento, semestreActual, graduado);
        this.estudiantes[indice] = estudianteActualizado;

    }

}