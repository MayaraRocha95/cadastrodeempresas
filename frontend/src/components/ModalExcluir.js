import React from "react";
import Modal from "react-modal";

function ModalExcluir({ isOpen, empresa, onConfirm, onCancel }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel} ariaHideApp={false}>
      <h2>Confirmar exclusão</h2>
      <p>Você tem certeza que deseja excluir a empresa {empresa.nome}?</p>
      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </Modal>
  );
}

export default ModalExcluir;
