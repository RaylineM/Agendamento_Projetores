import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AgendamentoList() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/agendamentos')
      .then((response) => {
        setAgendamentos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter agendamentos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Agendamentos</h2>
      <ul>
        {agendamentos.map((agendamento, index) => (
          <li key={index}>{agendamento.nome}, {agendamento.cargo}, {agendamento.data}, {agendamento.horarioDesejado}, {agendamento.horarioDevolucao}</li>
        ))}
      </ul>
    </div>
  );
}

export default AgendamentoList;
