const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Bhagavad Gita As It Is - English New Edition Hardcover",
        description: "The Bhagavad Gita is a sacred Hindu scripture that provides profound spiritual teachings and guidance in English, presented in a hardcover format.",
        url: "https://m.media-amazon.com/images/I/9167y6YkDZL._SY466_.jpg",
        price: 2500 // EG: 25.00
      },
    });


    await prisma.products.create({
      data: {
        title: "Sikh Kirpan - Stainless Steel Religious Sword ",
        description: "The Sikh Kirpan is a ceremonial sword worn by Sikh men as a symbol of readiness to defend the faith.",
        url: "https://m.media-amazon.com/images/I/51vpt02ixPL._AC_SL1000_.jpg",
        price: 12595
      },
    });
    // add additional product if want
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
