const typeDefs = `#graphql
    type User{
        id:ID!
        name:String!
        email:String!
        
    }

    type Query{
        users:[User]
    }

    type Mutation{
        addUser(user:AddUser):String
    }

    input AddUser{
        name:String
        email:String
    }


`
module.exports.typeDefs = typeDefs