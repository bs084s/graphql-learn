import { ApolloServer, gql } from "apollo-server";

const  typeDefs = gql`
type Query {
    first: String
    users: [User]
    user(_id:ID!):User
    quotes: [Quote]
    quote(id:ID!):Quote
    employees: [Employee]
}

type User {
    _id:ID
    fname:String
    lname:String
    email:String
    password:String
    quotes:[Quote]
}

type Quote {
    name:String
    by:ID
}

type Token {
    token: String
}

type Mutation{
    signupUser(userNew:UserInput!):User
    signInUser(userSignin: UserSingnInInput): Token
    createEmployee(employeeCreate: EmployeeInput!): Employee
}
input UserInput{
   fname:String!
   lname:String!
   email:String!
   password:String!
}
input UserSingnInInput{
    email:String!
    password:String!
 }

 input EmployeeInput {
    name:String!
    department:String!
    phone:String!
    salary:String!
 }

 type Employee {
    name:String!
    department:String!
    phone:String!
    salary:String!
 }
`

export default typeDefs;