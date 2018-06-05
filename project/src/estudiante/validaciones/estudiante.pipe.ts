import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';
import {EstudianteException} from './estudiante.exception';
@Injectable()
export class EstudiantesPipe implements PipeTransform{
    constructor(readonly esquema: Joi.SchemaLike){

    }
    transform(valor: any){
        const {error} = Joi.validate(valor, this.esquema);
        if (error){
            throw new EstudianteException('Error al ingresar los datos');
        }
        return valor;
    }
}