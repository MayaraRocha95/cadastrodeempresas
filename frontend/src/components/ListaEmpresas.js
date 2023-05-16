import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ModalDetalhes from "./ModalDetalhes";
import ModalEditar from "./ModalEditar";
import ModalExcluir from "./ModalExcluir";
import ModalCadastro from "./ModalCadastro";
import logo from "../assets/logo.png";

function ListaEmpresas() {
  const [empresas, setEmpresas] = useState([]);
  const [isDetalsOpen, setIsDetalsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
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

  const deleteEmpresa = (id) => {
    fetch(`http://localhost:4001/empresas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Empresa excluída com sucesso!");
      });
  };

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
      });
  };

  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="logotipo" />

        <div className="adicionar-empresa-button ">
          <button
            onClick={() => {
              setIsCadastroOpen(true);
            }}
          >
            Cadastrar nova empresa
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
          {empresas.map((empresa) => (
            <tr key={empresa.id}>
              <td>{empresa.id}</td>
              <td>{empresa.nome}</td>
              <td>{`${empresa.rua}, ${empresa.numero} - ${empresa.bairro}, ${empresa.cidade} - ${empresa.estado}`}</td>
              <td>
                <button
                  onClick={() => {
                    setEmpresa(empresa);
                    setIsDetalsOpen(true);
                  }}
                >
                  Detalhes
                </button>
                <button
                  onClick={() => {
                    setEmpresa(empresa);
                    setIsEditOpen(true);
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    setEmpresa(empresa);
                    setIsDeleteOpen(true);
                  }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {
          <>
            <ModalDetalhes
              isOpen={isDetalsOpen}
              onRequestClose={() => {
                setIsDetalsOpen(false);
              }}
              empresa={empresa}
            />
            <ModalEditar
              isOpen={isEditOpen}
              empresa={empresa}
              onClose={() => {
                setIsEditOpen(false);
              }}
            />
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
            <ModalCadastro
              isOpen={isCadastroOpen}
              onClose={() => {
                setIsCadastroOpen(false);
              }}
              addEmpresa={addEmpresa}
            />
          </>
        }
      </table>
    </>
  );
}

export default ListaEmpresas;
