const express = require('express');
const cors = require('cors');
const jsonfile = require('jsonfile');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const agendamentosFile = 'dados/agendamentos.json';

app.get('/api/agendamentos', (req, res) => {
  jsonfile.readFile(agendamentosFile, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler agendamentos.' });
    } else {
      res.json(data);
    }
  });
});

app.post('/api/agendamentos', (req, res) => {
  const newAgendamento = req.body;
  jsonfile.readFile(agendamentosFile, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao adicionar agendamento.' });
    } else {
      data.push(newAgendamento);
      jsonfile.writeFile(agendamentosFile, data, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Erro ao salvar agendamento.' });
        } else {
          res.json(newAgendamento);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
