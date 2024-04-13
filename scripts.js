document.addEventListener('DOMContentLoaded', function () {
    fetch('/hoteis')
        .then(response => response.json())
        .then(data => {
            const hotelsList = document.getElementById('hotels-list');
            data.forEach(hotel => {
                const hotelElement = document.createElement('div');
                hotelElement.classList.add('card-hotel');
                hotelElement.innerHTML = `
                    <div class="image_holder"><img src="hotel_image.jpg" alt="${hotel.nome}"></div>
                    <div class="card-description">
                        <h2>${hotel.nome}</h2>
                        <p>Localização: ${hotel.localizacao}</p>
                        <p>Preço: R$ ${hotel.preco.toFixed(2)}</p>
                    </div>
                `;
                hotelsList.appendChild(hotelElement);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar hotéis:', error);
        });
});
