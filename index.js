const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()


async function main() {
    // await prisma.comment.create({
    //     data: {
    //         comment: "ohhh so cuteeeee!!!"
    //     }
    // })
    // console.log("prisma database connected and comment created")

    const allUsers = await prisma.comment.findMany({
    })

    console.log(allUsers)

}

async function findComment() {
    try {
        const foundComment = await prisma.comment.findFirst({
            where: {
                comment: "this is the best goal ever"
            }
        })

        console.log(foundComment)

    }
    catch (e) {
        console.log(e.message)
        console.log("couldn't find")
    }

}


main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


findComment()
