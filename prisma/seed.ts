import { PrismaClient } from '../generated/prisma'
const prisma = new PrismaClient();
async function main() {
  // create two dummy recipes
  const recipe1 = await prisma.recipe.upsert({
    where: { title: 'Spaghetti Bolognese' },
    update: {},
    create: {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian dish',
      ingredients: 'Spaghetti, minced beef',
      instructions: '1. Cook the spaghetti. 2. Fry the minced beef. 3.',
    },
  });

  const recipe2 = await prisma.recipe.upsert({
    where: { title: 'Chicken Curry' },
    update: {},
    create: {
      title: 'Chicken Curry',
      description: 'A spicy Indian dish',
      ingredients: 'Chicken, curry powder, onions, garlic,',
      instructions: '1. Fry the chicken. 2. Add the curry powder to the',
    },
  });

  console.log({ recipe1, recipe2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
