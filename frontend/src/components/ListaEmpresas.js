import React, { useState, useEffect } from "react";

function ListaEmpresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/empresas", {
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
              <button>Detalhes</button>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaEmpresas;
