const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('./utils/auth'); // Assurez-vous que le chemin est correct

const prisma = new PrismaClient();

async function checkUser() {
  const user = await prisma.user.findUnique({
    where: { username: 'th3m4rc3lu5' },
  });

  if (user) {
    console.log('User found:', user);
  } else {
    console.log('User not found');
  }

  await prisma.$disconnect();
}

checkUser().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});

async function addAdminUser() {
  const hashedPassword = await hashPassword('adminpassword');

  const user = await prisma.user.create({
    data: {
      username: 'th3m4rc3lu5',
      password: hashedPassword,
      role: 'ADMIN',
      accounts: {
        create: {
          provider: 'credentials',
          providerAccountId: 'th3m4rc3lu5',
        },
      },
    },
  });

  console.log('Admin user created:', user);

  await prisma.$disconnect();
}

addAdminUser().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
