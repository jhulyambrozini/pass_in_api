import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

export async function checkIn(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/attendees/:attendeeId/check-in',
    {
      schema: {
        params: z.object({
          attendeeId: z.coerce.number().int(),
        }),
        response: {
          201: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { attendeeId } = request.params;

      const attendeeCheckin = await prisma.checkIn.findUnique({
        where: {
          attendeeId,
        },
      });

      if (attendeeCheckin !== null) {
        throw new Error('Partcipante já fez o check in');
      }

      await prisma.checkIn.create({
        data: {
          attendeeId,
        },
      });

      return reply.status(201).send();
    }
  );
}
