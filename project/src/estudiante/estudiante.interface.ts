export class Estudiante{
    constructor(public id: number,
                public nombres: string,
                public apellidos: string,
                public fecha_nacimiento: string,
                public semestreActual: number,
                public graduado: string){
    }
}