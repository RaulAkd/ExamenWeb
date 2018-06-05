import { HttpException, HttpStatus } from '@nestjs/common';

export class MateriaException extends HttpException{
    constructor(readonly mensaje: any){
        super(mensaje, HttpStatus.BAD_REQUEST);
    }
}