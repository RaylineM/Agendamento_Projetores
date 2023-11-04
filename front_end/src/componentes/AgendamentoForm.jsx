import React, { useState } from 'react';
import axios from 'axios';

function AgendamentoForm() {
  const [agendamento, setAgendamento] = useState({
    nome: '',
    cargo: '',
    data: '',
    horarioDesejado: '',
    horarioDevolucao: '',
  });
  const [erro, setErro] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se todos os campos foram preenchidos
    if (
      agendamento.nome &&
      agendamento.cargo &&
      agendamento.data &&
      agendamento.horarioDesejado &&
      agendamento.horarioDevolucao
    ) {
      axios
        .post('http://localhost:8000/api/agendamentos', agendamento)
        .then((response) => {
          console.log('Agendamento adicionado:', response.data);
          // Limpar o formulário após o envio
          setAgendamento({
            nome: '',
            cargo: '',
            data: '',
            horarioDesejado: '',
            horarioDevolucao: '',
          });
          setErro(''); // Limpar erros
        })
        .catch((error) => {
          console.error('Erro ao adicionar agendamento:', error);
          setErro('Erro ao adicionar agendamento. Por favor, tente novamente.');
        });
    } else {
      setErro('Todos os campos são obrigatórios.');
    }
  };

  return (
    <div className="agendamento-form">
      <h2>Adicionar Agendamento</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={agendamento.nome}
          onChange={(e) => setAgendamento({ ...agendamento, nome: e.target.value })}
        />
        <label>Cargo:</label>
        <select
          value={agendamento.cargo}
          onChange={(e) => setAgendamento({ ...agendamento, cargo: e.target.value })}
        >
          <option value="" disabled>Selecione o cargo</option>
          <option value="professor">Professor</option>
          <option value="aluno">Aluno</option>
          <option value="diretor">Diretor</option>
        </select>
        <label>Data:</label>
        <input
          type="date"
          value={agendamento.data}
          onChange={(e) => setAgendamento({ ...agendamento, data: e.target.value })}
        />
        <label>Horário Desejado:</label>
        <input
          type="time"
          value={agendamento.horarioDesejado}
          onChange={(e) =>
            setAgendamento({ ...agendamento, horarioDesejado: e.target.value })
          }
        />
        <label>Horário de Devolução:</label>
        <input
          type="time"
          value={agendamento.horarioDevolucao}
          onChange={(e) =>
            setAgendamento({ ...agendamento, horarioDevolucao: e.target.value })
          }
        />
        <button type="submit">Adicionar</button>
      </form>
      {erro && <p className="error">{erro}</p>}
    </div>
  );
}

export default AgendamentoForm;
