const prisma = require("./db")

const resolvers = {
    Query: {
        async users() {
            const allUsers = await prisma.user.findMany({})
            return allUsers
        }
    },
    Mutation: {
        async addUser(_, args) {
            const addUser = await prisma.user.create({
                data: args.user
            })
            return addUser
        }

    }
}

module.exports = resolvers