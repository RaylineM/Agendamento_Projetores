import React from 'react';
import './App.css'; 
import AgendamentoList from './componentes/AgendamentoList';
import AgendamentoForm from './componentes/AgendamentoForm';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Agendamento de Projetores</h1>
      </header>
      <AgendamentoForm />
      <AgendamentoList />
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;

