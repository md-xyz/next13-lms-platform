const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Engineering" },
        { name: "Design" },
        { name: "Quality Assurance" },
        { name: "DevOps" },
        { name: "HR" },
        { name: "Business Development" },
        { name: "Leadership" },
        { name: "Web" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();