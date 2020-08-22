const express = require("express");
const cors = require("cors");

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

/**
 * Lista todos os repositórios cadastrados
 */
app.get("/repositories", (request, response) => {
    return response.json(repositories)
});

/**
 * Realiza o cadastro de repositorio
 */
app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = { 
    id: uuid(),
    title, 
    url, 
    techs, 
    likes: 0 
  }

  repositories.push(repository)

  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  // Pegando params da rota
  const { id } = request.params
  const { title, url, techs } = request.body

  const update = repositories.find(item => {
    if (item.id === id) {
      const updated = {
        item
      }
    }
  })



});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params

  const indexDeleted = repositories.findIndex(item => item.id === id)

  if (indexDeleted > 0) {
    repositories.splice(indexDeleted, 1)
  }

  return response.status(204).json({})
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
