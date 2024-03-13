const prisma = require("./db")

const resolvers = {
    Query: {
        async users() {
            const allUsers = await prisma.user.findMany({})
            return allUsers
        },
        async user(_, args) {
            const findOne = await prisma.user.findUnique({
                where: {
                    id: parseInt(args.id)
                }
            })
            return findOne
        }
    },
    Mutation: {
        async addUser(_, args) {
            const addUser = await prisma.user.create({
                data: args.user
            })
            return "User added"
        },
        async deleteUser(_, args) {
            await prisma.user.delete({
                where: {
                    id: parseInt(args.id)
                }

            })
            return "User deleted"
        },
        async updateUser(_, args) {
            await prisma.user.update({
                where: {
                    id: parseInt(args.id)
                },
                data: args.user

            })
            return "user updated"
        }

    }
}

module.exports = resolvers