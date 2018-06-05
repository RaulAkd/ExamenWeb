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
    modificarMateria(id: number, nombre: string, semestre: number){
        const indice = this.materias.findIndex((Materia) => Materia.id === id);
        const materiaActualizada = new Materia(id, nombre, semestre);
        this.materias[indice] = materiaActualizada;
    }
}