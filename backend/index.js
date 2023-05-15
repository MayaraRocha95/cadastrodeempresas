const express = require("express");
const app = express();
const sequelize = require("./database");
const empresasRouter = require("./routes/empresas");

app.use(express.json());
app.use("/empresas", empresasRouter);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
  });
});
