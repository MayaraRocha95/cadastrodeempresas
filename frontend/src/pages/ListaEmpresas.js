import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import ModalDetalhes from "../components/ModalDetalhes";
import ModalEditar from "../components/ModalEditar";
import ModalExcluir from "../components/ModalExcluir";
import ModalCadastro from "../components/ModalCadastro";
import logo from "../assets/logo.png";

function ListaEmpresas() {
  // Estado para armazenar a lista de empresas
  const [empresas, setEmpresas] = useState([]);

  // Estados para controlar a abertura dos modais
  const [isDetalsOpen, setIsDetalsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  // Estado para armazenar os detalhes da empresa selecionada
  const [empresa, setEmpresa] = useState({});

  // Função executada quando o componente é montado
  useEffect(() => {
    // Obtém a lista de empresas da API
    fetch("http://localhost:4001/empresas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => setEmpresas(data));
  }, []);

  // Função para excluir uma empresa
  const deleteEmpresa = (id) => {
    fetch(`http://localhost:4001/empresas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        toast.success("Empresa excluída com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        // Exibindo uma notificação de erro
        toast.error("Erro ao excluir empresa!");
      });
  };
  // Função para adicionar uma nova empresa
  const addEmpresa = (empresa) => {
    fetch("http://localhost:4001/empresas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(empresa),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsCadastroOpen(false);
        toast.success("Empresa cadastrada com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        // Exibindo uma notificação de erro
        toast.error("Erro ao cadastrar empresa!");
      });
  };

  return (
    <>
      {/* Componente da barra de navegação */}
      <div className="navbar">
        <img className="logo" src={logo} alt="logotipo" />
        <div className="adicionar-empresa-button">
          <button
            onClick={() => {
              setIsCadastroOpen(true);
            }}
          >
            Cadastrar Empresa
          </button>
        </div>
      </div>

      <h1>Lista de Empresas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderiza a lista de empresas */}
          {empresas.map((empresa) => (
            <tr key={empresa.id}>
              <td>{empresa.id}</td>

              <td>{empresa.nome}</td>
              <td>{`${empresa.rua}, ${empresa.numero} - ${empresa.bairro}, ${empresa.cidade} - ${empresa.estado}`}</td>
              <td>
                {/* Botão para abrir o modal de detalhes */}
                <button
                  onClick={() => {
                    setEmpresa(empresa);
                    setIsDetalsOpen(true);
                  }}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>

                {/* Botão para abrir o modal de edição */}
                <button
                  onClick={() => {
                    setEmpresa(empresa);
                    setIsEditOpen(true);
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                {/* Botão para abrir o modal de exclusão */}
                <button
                  onClick={() => {
                    setEmpresa(empresa);
                    setIsDeleteOpen(true);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modais */}
      <>
        {/* Modal de detalhes */}
        <ModalDetalhes
          isOpen={isDetalsOpen}
          onRequestClose={() => {
            setIsDetalsOpen(false);
          }}
          empresa={empresa}
        />

        {/* Modal de edição */}
        <ModalEditar
          isOpen={isEditOpen}
          empresa={empresa}
          onClose={() => {
            setIsEditOpen(false);
          }}
        />

        {/* Modal de exclusão */}
        <ModalExcluir
          isOpen={isDeleteOpen}
          empresa={empresa}
          onConfirm={() => {
            setIsDeleteOpen(false);
            deleteEmpresa(empresa.id);
          }}
          onCancel={() => {
            setIsDeleteOpen(false);
            setEmpresa({});
          }}
        />

        {/* Modal de cadastro */}
        <ModalCadastro
          isOpen={isCadastroOpen}
          onClose={() => {
            setIsCadastroOpen(false);
          }}
          addEmpresa={addEmpresa}
        />
      </>
    </>
  );
}

export default ListaEmpresas;
