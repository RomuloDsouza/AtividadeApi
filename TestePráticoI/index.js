const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;

const senhaSecreta = "mestre";

app.use(bodyParser.json());

const users = [
  { username: "user", password: "123456" },
];

const products = [
  { id: 1, nome: "escova de dente", preco: "25.00" },
  { id: 2, nome: "shampoo", preco: "19.00" },
  { id: 3, nome: "sabonete", preco: "3.00" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ username: user.username, password: user.password }, senhaSecreta, {
      expiresIn: "2h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Usuário ou senha inválidos" });
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
    jwt.verify(token, senhaSecreta, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.get("/produtos", authenticateJWT, (req, res) => {
  res.json({ produtos: products });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http:"${port}`
    //localhost:);""
)});