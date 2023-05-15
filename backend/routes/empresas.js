const express = require("express");
const router = express.Router();
const Empresa = require("../models/Empresa");

// Listagem de todas as empresas cadastradas
router.get("/", async (req, res) => {
  const empresas = await Empresa.findAll();
  res.json(empresas);
});

// Detalhamento dos dados de uma empresa pelo ID
router.get("/:id", async (req, res) => {
  const empresa = await Empresa.findByPk(req.params.id);
  if (!empresa) {
    res.status(404).send("Empresa não encontrada");
  } else {
    res.json(empresa);
  }
});

// Cadastro de uma nova empresa
router.post("/", async (req, res) => {
  const empresa = await Empresa.create(req.body);
  res.json(empresa);
});

// Atualização dos dados de uma empresa através do ID
router.put("/:id", async (req, res) => {
  const empresa = await Empresa.findByPk(req.params.id);
  if (!empresa) {
    res.status(404).send("Empresa não encontrada");
  } else {
    empresa.nome = req.body.nome;
    empresa.rua = req.body.rua;
    empresa.numero = req.body.numero;
    empresa.bairro = req.body.bairro;
    empresa.cidade = req.body.cidade;
    empresa.estado = req.body.estado;
    await empresa.save();
    res.json(empresa);
  }
});

// Exclusão de uma empresa através do ID
router.delete("/:id", async (req, res) => {
  const empresa = await Empresa.findByPk(req.params.id);
  if (!empresa) {
    res.status(404).send("Empresa não encontrada");
  } else {
    await empresa.destroy();
    res.send("Empresa excluída com sucesso");
  }
});

module.exports = router;
