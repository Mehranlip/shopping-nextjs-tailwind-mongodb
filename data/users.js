import bcrypt from 'bcryptjs'

const users =
  [
    {
      name: "User 1",
      email: "user1@mehranlip.ir",
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: "User 2",
      email: "user2@mehranlip.ir",
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    }
  ]


export default users