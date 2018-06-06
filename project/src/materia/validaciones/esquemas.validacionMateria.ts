import * as Joi from 'joi';
export class EsquemasValidacionMateria{
    public esquemaMateria = Joi.object().keys({
        id: Joi.number().integer().min(1).max(30),
        nombre: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        descripcion: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        activo: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        fechaCreacion: Joi.string(),
        numeroHorasPorSemana: Joi.number().integer().min(1).max(8),
        estudianteId: Joi.number().integer().min(1).max(30),
        });
}
