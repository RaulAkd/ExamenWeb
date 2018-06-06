export class Materia{
    constructor(public id: number,
                public nombre: string,
                public descripcion: string,
                public activo: string,
                public fechaCreacion: string,
                public numeroHorasPorSemana: number,
                public estudianteId: number){}
}