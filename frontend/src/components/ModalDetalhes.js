import React from "react";
import Modal from "react-modal";

function ModalDetalhes(props) {
  const { isOpen, onRequestClose, empresa } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Detalhes da empresa</h2>
      <p>ID: {empresa.id}</p>
      <p>Nome: {empresa.nome}</p>
      <p>Endereço:</p>
      <p>
        {empresa.rua}, {empresa.numero} - {empresa.bairro}, {empresa.cidade} -{" "}
        {empresa.estado}
      </p>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
}

export default ModalDetalhes;
