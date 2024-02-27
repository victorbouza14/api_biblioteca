const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const { auth } = require("express-oauth2-jwt-bearer");
const librosRouter = require("./routes/libros");

const autenticacion = auth({
    audience: 'https://localhost:3000/api/productos',
    issuerBaseURL: 'https://dev-5tpwy4rwtab8x3p1.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

const app = express();
app.use(express.json());
app.use("/libros", autenticacion ,librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
