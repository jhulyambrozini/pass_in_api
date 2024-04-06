import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: '42e2d8d7-9628-48d9-8099-8aeca2dd2e04',
      title: 'NLW Smmuit',
      slug: 'nlw-summit',
      details: 'Evento de programação full cycle',
      maximumAttendees: 10,
    },
  });
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect();
});
