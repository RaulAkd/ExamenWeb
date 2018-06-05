import { HttpException, HttpStatus } from '@nestjs/common';

export class EstudianteException extends HttpException{
    constructor(readonly mensaje: any){
        super(mensaje, HttpStatus.BAD_REQUEST);
    }
}