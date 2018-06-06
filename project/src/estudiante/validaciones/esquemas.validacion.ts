import * as Joi from 'joi';
export class EsquemasValidacion{
    public esquemaEstudiante = Joi.object().keys({
        id: Joi.number().integer().min(1).max(30),
        nombre: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        apellido: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        fechaNacimiento: Joi.string(),
        semestreActual: Joi.number().integer().min(1).max(8),
        graduado: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        });
}