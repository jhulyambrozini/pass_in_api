import { FastifyInstance } from 'fastify';
import { BadRequest } from './routes/_errors/bad-request';
import { ZodError } from 'zod';

type FastifyErrorHanlder = FastifyInstance['errorHandler'];

export const errorHandler: FastifyErrorHanlder = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Error durante a validação da requisição`,
      error: error.flatten().fieldErrors,
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }

  return reply.status(500).send({ message: 'Um error inesperado aconteceu' });
};
