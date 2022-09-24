const express = require('express');
const app = express();
function isAuthorized(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'secretpassword') {
      next();
    } else {
      res.status(401);
      res.send('Not permitted');
    }
}

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/users", isAuthorized, (req, res) => {
    const users = [
        {
            id: 1,
            name: "User Userson",
        },
    ];

    res.json(users);
  });

app.get("/products", (req, res) => {
    const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    {
      id: 3,
      name: "wrench",
    },
   ];

   res.json(products);
});

//
// app.use((req, res, next) => {
//     console.log('Pre request');
// });

// app.get('/protected-resource', () => {
//     console.log('Handle the actual request');
// });

// app.use((req, res, next) => {
//     console.log('Post request');
// });

// app.get('/login', () => res.send('login!'));

//
app.get(
    '/some-route',
    () => {
        console.log('Pre request middleware');
    }, () => {
        console.log('Handle the actual request');
});

//
app.listen(port, () => console.log(`Example app listening on port ${port}!`));