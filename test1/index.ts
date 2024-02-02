import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "John Mark",
    //         email: "johnmarkmuhando23@gmail.com",
    
    //     }
    // });

    // const user = await prisma.user.findMany();

    // create article
    // const article = await prisma.article.create({
    //     data: {
    //         title: "John's Article",
    //         body: "This is John's 1st article",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    // Get all articles
    // const articles = await prisma.article.findMany();

    const user = await prisma.user.create({
        data: {
            name: "John Mark",
            email: "johnmarkmuhando23@gmail.com",
            articles: {
                create: [
                    {
                        title: "John's Article",
                        body: "This is John's 1st article",
                    }
                ]
            }
        }
    })
    console.log(articles);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
