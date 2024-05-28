import { saltAndHashPassword } from "@/utils/password";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Password you wish to hash for the admin account
  const plainTextPassword = "deng12";
  const hashedPassword = await saltAndHashPassword(plainTextPassword);

  // Upsert Admin in the database
  const admin = await prisma.admin.upsert({
    where: { email: "depengyu@gmail.com" },
    update: {},
    create: {
      username: "pengyu", // assuming username is a required unique field
      email: "depengyu@gmail.com",
      password: hashedPassword, // use the hashed password
      fullName: "Pengyu Deng", // optional
      role: "superadmin", // optional
    },
  });

  console.log({ admin });
}

main()
  .then(async () => {
    console.log("Seeding finished.");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error during seeding: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });
