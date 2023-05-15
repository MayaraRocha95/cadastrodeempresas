import React, { useState, useEffect } from "react";
import ModalDetalhes from "./ModalDetalhes";
import ModalEditar from "./ModalEditar";

function ListaEmpresas() {
  const [empresas, setEmpresas] = useState([]);
  const [isDetalsOpen, setIsDetalsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    console.log("Empresa", empresa);
  }, [empresa]);

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

  return (
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
              <button>Excluir</button>
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
        </>
      }
    </table>
  );
}

export default ListaEmpresas;
