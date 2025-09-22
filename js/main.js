// Создаем массив с данными о криптовалютах. Это наш "фейковый" источник данных.
const cryptocurrencies = [
    {
        name: "Bitcoin",
        symbol: "BTC",
        price: 65432.10,
        change_24h: 2.5
    },
    {
        name: "Ethereum",
        symbol: "ETH",
        price: 4123.45,
        change_24h: -1.2
    },
    {
        name: "Solana",
        symbol: "SOL",
        price: 187.65,
        change_24h: 5.1
    },
    {
        name: "Litecoin",
        symbol: "LTC",
        price: 155.20,
        change_24h: -0.8
    }
];
function displayCryptoCards(cryptos) {
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек
    cryptos.forEach(crypto => {
        const card = createCryptoCard(crypto);
        container.appendChild(card);
    });
}

// Изначальный вызов, чтобы показать все карточки
displayCryptoCards(cryptocurrencies);

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCryptos = cryptocurrencies.filter(crypto => {
        return crypto.name.toLowerCase().includes(searchTerm) || crypto.symbol.toLowerCase().includes(searchTerm);
    });
    displayCryptoCards(filteredCryptos);
});
// Функция, которая будет создавать карточку для каждой криптовалюты
function createCryptoCard(crypto) {
    // Создаем новый HTML-элемент <div>
    const card = document.createElement('div');
    // Добавляем ему класс для стилей
    card.classList.add('crypto-card');

    // Определяем класс для изменения цены (зеленый для роста, красный для падения)
    const changeClass = crypto.change_24h >= 0 ? 'positive' : 'negative';

    // Заполняем содержимое карточки
    card.innerHTML = `
        <h3>${crypto.name} (${crypto.symbol})</h3>
        <p>Цена: $${crypto.price.toFixed(2)}</p>
        <p class="${changeClass}">Изменение за 24ч: ${crypto.change_24h}%</p>
    `;

    return card;
}

// Находим контейнер, куда будем добавлять карточки
const container = document.getElementById('crypto-cards-container');

// Проходимся по каждому элементу в нашем массиве и добавляем его на страницу
displayCryptoCards(cryptocurrencies)(crypto => {
    const card = createCryptoCard(crypto);
    container.appendChild(card);
});
const chartData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
        label: 'Цена Bitcoin (BTC)',
        data: [65000, 65500, 65300, 66000, 65800, 66200, 65900],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4,
        fill: true
    }]
};

const ctx = document.getElementById('price-chart').getContext('2d');

const priceChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Цена ($)'
                }
            }
        }
    }
}); 
