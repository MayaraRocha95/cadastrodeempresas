import React, { useState } from "react";
import Modal from "react-modal";

function ModalFormulario({ isOpen, onClose, addEmpresa }) {
  // Estado para armazenar os valores dos campos do formulário
  const [novaEmpresa, setNovaEmpresa] = useState({
    nome: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  // Função para atualizar o estado dos campos do formulário
  const handleEmpresaChange = (event) => {
    const { name, value } = event.target;
    setNovaEmpresa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    addEmpresa(novaEmpresa);
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <h1>Cadastrar Empresa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={novaEmpresa.nome}
            onChange={handleEmpresaChange}
          />
        </div>

        <div>
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            name="rua"
            value={novaEmpresa.rua}
            onChange={handleEmpresaChange}
          />
        </div>

        <div>
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={novaEmpresa.numero}
            onChange={handleEmpresaChange}
          />
        </div>

        <div>
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            value={novaEmpresa.bairro}
            onChange={handleEmpresaChange}
          />
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={novaEmpresa.cidade}
            onChange={handleEmpresaChange}
          />
        </div>

        <div>
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={novaEmpresa.estado}
            onChange={handleEmpresaChange}
          />
        </div>

        <button className="botaoprimary" type="submit">
          Cadastrar
        </button>
        <button className="botaosecundary" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </Modal>
  );
}

export default ModalFormulario;
