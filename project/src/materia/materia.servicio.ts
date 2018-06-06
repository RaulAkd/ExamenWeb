import { Injectable } from '@nestjs/common';
import { Materia } from './materia.interface';

@Injectable()
export class ServicioMaterias{
    private materias: Materia[]= [];

    crearMateria(materia: Materia){
        this.materias.push(materia);
    }
    mostrarTodasLasMaterias(){
        return this.materias;
    }
    mostrarMateriaPorId(id: number){
        const indice = this.materias.findIndex((Materia) => Materia.id === id);
        return this.materias[indice];
    }
    // tslint:disable-next-line:max-line-length
    modificarMateria(id: number, nombre: string, descripcion: string, activo: string, fechaCreacion: string, numeroHorasPorSemana: number, estudianteId: number){
        const indice = this.materias.findIndex((Materia) => Materia.id === id);
        const materiaActualizada = new Materia(id, nombre, descripcion, activo, fechaCreacion, numeroHorasPorSemana, estudianteId);
        this.materias[indice] = materiaActualizada;
    }
}