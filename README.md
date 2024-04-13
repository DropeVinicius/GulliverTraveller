# Gulliver Traveller
- API de Hotéis:
Esta API fornece informações sobre hotéis, incluindo seus nomes, localizações e preços.

- Visão Geral
A API de Hotéis foi desenvolvida para fornecer uma maneira simples e eficaz de acessar informações sobre diferentes hotéis. Ela permite listar todos os hotéis disponíveis, obter detalhes de um hotel específico, adicionar novos hotéis, atualizar informações de hotéis existentes e remover hotéis da lista.

- Tecnologias:
Python 3.x, Flask, Flask-CORS

- Rotas da API
GET /hoteis: Retorna uma lista de hotéis.

GET /hoteis/{id}: Retorna detalhes de um hotel específico com o ID fornecido.

POST /hoteis: Adiciona um novo hotel à lista.

PUT /hoteis/{id}: Atualiza os detalhes de um hotel existente.

DELETE /hoteis/{id}: Remove um hotel da lista com o ID fornecido.
