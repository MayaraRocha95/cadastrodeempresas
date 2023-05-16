import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

function ModalEditar({ isOpen, empresa, onClose, onUpdate }) {
  // Definindo estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  // Atualizando os estados dos campos do formulário quando a prop "empresa" muda
  useEffect(() => {
    setNome(empresa.nome);
    setRua(empresa.rua);
    setNumero(empresa.numero);
    setBairro(empresa.bairro);
    setCidade(empresa.cidade);
    setEstado(empresa.estado);
  }, [empresa]);

  // Função para lidar com o envio do formulário de edição
  const handleEdit = (event) => {
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
    // Enviando uma requisição PUT para atualizar a empresa no servidor
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
        // Exibindo uma notificação de sucesso e recarregando a página
        toast.success("Empresa atualizada com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        // Exibindo uma notificação de erro
        toast.error("Ocorreu um erro ao atualizar a empresa");
      });
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <h1>Editar empresa</h1>
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        {/* Campos de entrada para os demais atributos da empresa */}
        {/* Cada campo atualiza o estado correspondente ao ser alterado */}
        {/* Exemplo: onChange={(event) => setRua(event.target.value)} */}
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
        {/* ... (outros campos) ... */}
        <button className="botaoprimary" type="submit">
          Salvar
        </button>
        <button className="botaosecundary" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </Modal>
  );
}

export default ModalEditar;
