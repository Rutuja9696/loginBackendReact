# User Login/Signup Backend:

User login/signup backend is built using express server, mongoDB is used to store the data that the user will be posting via signup form .This backend application is hosted on Heroku.

## Getting Started

- [Check the frontend app of the User Login/Signup code](https://github.com/Rutuja9696/signup-login-react.git)
- [Check the User Login/Signup backend code](https://github.com/Rutuja9696/loginBackendReact.git)

## Features

- Signup User and store the data in mongoDb.
- Login user.
- Validation for entering valid email.
- Allows only signedup users to login.
- Authentication jwt
  , generates cookies And creating password as hash.

## Additional Features

- hosted on Heroku platform.
- used mongoDb to store users data.

### Downloading and Running this Project Locally

1. clone the repository

```

https://github.com/Rutuja9696/loginBackendReact.git

```

2. add a `.env` file inside the root folder

```

DATABASE_URL=your_db_url
DEBUG=true // set true to use local db and false to use atlas
PORT=your_port_number

```

Sample for local

```

DATABASE_URL=mongodb://127.0.0.1:27017/user

DEBUG=true
PORT=4000

```

### Supported Routes

```

/user/signup : (method:post) - to signup new user.
/user/login : (method:post) - to login existing user.

```

Note:

1. send user data in this format:

```

{
"name":"Sherlock",
"email":"sherlock@gmail.com",
"password":"pass123",
"confirmPassword":"pass123"
}

```

## Live Demo of this Project

[hosted backend](https://signup-login-react.herokuapp.com/)

## References

- [mongoose quick start](https://mongoosejs.com/docs/index.html)
- [mongoDB documentation reference](https://docs.mongodb.com/manual/introduction/)
- [uniquid to generate unique ids](https://www.npmjs.com/package/uniqid)
- [npm express](https://www.npmjs.com/package/express)
- [axios to make api calls](https://www.npmjs.com/package/axios)
- [CORS module to talk between cross-origin resources](https://www.npmjs.com/package/cors)
- [middlewares in nodejs](https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113)

## Author

- **Rutuja Patil** - _work by_ - [irutujapatil](https://github.com/Rutuja9696)
