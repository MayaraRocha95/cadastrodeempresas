import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

function ModalEditar({ isOpen, empresa, onClose, onUpdate }) {
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    setNome(empresa.nome);
    setRua(empresa.rua);
    setNumero(empresa.numero);
    setBairro(empresa.bairro);
    setCidade(empresa.cidade);
    setEstado(empresa.estado);
  }, [empresa]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEmpresa = {
      id: empresa.id,
      nome,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    };
    fetch(`http://localhost:4001/empresas/${empresa.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(updatedEmpresa),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Empresa atualizada com sucesso!");
      });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <h2>Editar empresa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            value={rua}
            onChange={(event) => setRua(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </form>
    </Modal>
  );
}

export default ModalEditar;
