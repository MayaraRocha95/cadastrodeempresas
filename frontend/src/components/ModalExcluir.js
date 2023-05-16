import React from "react";
import Modal from "react-modal";

function ModalExcluir({ isOpen, empresa, onConfirm, onCancel }) {
  // Função que exibe um modal de confirmação de exclusão de empresa
  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onCancel}
      ariaHideApp={false}
    >
      <h1>Confirmar exclusão</h1>
      {/* Exibe a mensagem perguntando se o usuário tem certeza que deseja excluir a empresa */}
      <p>Você tem certeza que deseja excluir a empresa {empresa.nome}?</p>
      {/* Botão para confirmar a exclusão da empresa, executa a função onConfirm */}
      <button className="botaoprimary" onClick={onConfirm}>
        Confirmar
      </button>
      {/* Botão para cancelar a exclusão, executa a função onCancel */}
      <button className="botaosecundary" onClick={onCancel}>
        Cancelar
      </button>
    </Modal>
  );
}

export default ModalExcluir;
