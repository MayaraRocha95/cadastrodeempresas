import React, { useState } from "react";
import Modal from "react-modal";

function ModalFormulario({ isOpen, onClose, addEmpresa }) {
  const [novaEmpresa, setNovaEmpresa] = useState({
    nome: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleEmpresaChange = (event) => {
    const { name, value } = event.target;
    setNovaEmpresa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmpresa(novaEmpresa);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={novaEmpresa.nome}
          onChange={handleEmpresaChange}
        />

        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={novaEmpresa.rua}
          onChange={handleEmpresaChange}
        />

        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={novaEmpresa.numero}
          onChange={handleEmpresaChange}
        />

        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={novaEmpresa.bairro}
          onChange={handleEmpresaChange}
        />

        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={novaEmpresa.cidade}
          onChange={handleEmpresaChange}
        />

        <label htmlFor="estado">Estado:</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={novaEmpresa.estado}
          onChange={handleEmpresaChange}
        />

        <button type="submit">Cadastrar</button>
        <button onClick={onClose}>Cancelar</button>
      </form>
    </Modal>
  );
}

export default ModalFormulario;
