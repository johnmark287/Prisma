import { PrismaClient } from '@prisma/client'
import { error } from 'console'
const prisma = new PrismaClient()

async function main() {
    // Prisma Client queries.
    const user = await prisma.user.create({
        data: {
            name: "Sally"
        }
    })
    const users = await prisma.user.findMany()
    console.log(users)
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
