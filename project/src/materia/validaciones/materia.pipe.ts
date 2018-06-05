import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';
import { MateriaException } from './materia.exception';
@Injectable()
export class MateriaPipe implements PipeTransform{
    constructor(readonly esquema: Joi.SchemaLike){

    }
    transform(valor: any){
        const {error} = Joi.validate(valor, this.esquema);
        if (error){
            throw new MateriaException('Error al ingresar los datos de materia');
        }
        return valor;
    }
}