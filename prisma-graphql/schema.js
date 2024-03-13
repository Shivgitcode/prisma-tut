const typeDefs = `#graphql
    type User{
        id:ID!
        name:String!
        email:String!
        
    }

    type Query{
        users:[User]
        user(id:ID!):User
    }

    type Mutation{
        addUser(user:AddUser):String
        deleteUser(id:ID!):String
        updateUser(id:ID!,user:AddUser!):String
    }

    input AddUser{
        name:String
        email:String
    }


`
module.exports = typeDefs