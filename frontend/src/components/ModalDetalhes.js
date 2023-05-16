import React from "react";
import Modal from "react-modal";

function ModalDetalhes(props) {
  // Desestruturando as propriedades recebidas do componente pai
  const { isOpen, onRequestClose, empresa } = props;

  return (
    <Modal className="modal" isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1>Detalhes da empresa</h1>
      <p>ID: {empresa.id}</p>
      <p>Nome: {empresa.nome}</p>
      <p>
        Endereço:
        {empresa.rua}, {empresa.numero} - {empresa.bairro}, {empresa.cidade} -{" "}
        {empresa.estado}
      </p>
      <button className="botaosecundary" onClick={onRequestClose}>
        Fechar
      </button>
    </Modal>
  );
}

export default ModalDetalhes;
