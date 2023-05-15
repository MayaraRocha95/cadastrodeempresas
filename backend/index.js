const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./database");
const empresasRouter = require("./routes/empresas");

const corsOptions = {
  exposedHeaders: "*",
};

app.use(express.json());
app.use(cors(corsOptions)); // Adicionando o middleware cors com opções
app.use("/empresas", empresasRouter);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Servidor iniciado na porta 5000");
  });
});
