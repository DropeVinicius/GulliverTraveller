# Gulliver Traveller
O Gulliver Traveller é um projeto que ajuda pessoas a terem a melhor experiência com a sua viagem. O projeto possui 4 horas sendo a hospedagem, o aluguel de carros, os restaurantes e os pontos turísticos, para que ele possa escolher pelas melhores opções do seu destino, tornando uma experiência completa.

Sobre a Criação da API:
- API de Hotéis:
a API fornece informações sobre hotéis, incluindo seus nomes, localizações e preços.

- Visão Geral: 
A API de Hotéis foi desenvolvida para fornecer uma maneira simples e eficaz de acessar informações sobre diferentes hotéis. Ela permite listar todos os hotéis disponíveis, obter detalhes de um hotel específico, adicionar novos hotéis, atualizar informações de hotéis existentes e remover hotéis da lista.

- Tecnologias:
Python 3.x, Flask, Flask-CORS

- Rotas da API
GET /hoteis: Retorna uma lista de hotéis.

GET /hoteis/{id}: Retorna detalhes de um hotel específico com o ID fornecido.

POST /hoteis: Adiciona um novo hotel à lista.

PUT /hoteis/{id}: Atualiza os detalhes de um hotel existente.

DELETE /hoteis/{id}: Remove um hotel da lista com o ID fornecido.
