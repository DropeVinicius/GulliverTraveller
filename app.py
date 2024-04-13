from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Configuração do CORS

hoteis = [
    {"nome": "Hilton Morumbi", "localizacao": "Sao Paulo", "preco": 850},
    {"nome": "Copacabana Palace", "localizacao": "Rio de Janeiro", "preco": 850},
    {"nome": "Sheraton WTC Hotel", "localizacao": "Sao Paulo", "preco": 850},
    {"nome": "Grand Hyatt", "localizacao": "Sao Paulo", "preco": 850}
]

@app.route('/hoteis')
def get_hoteis():
    return jsonify(hoteis)

if __name__ == '__main__':
    app.run(debug=True)
