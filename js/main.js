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
cryptocurrencies.forEach(crypto => {
    const card = createCryptoCard(crypto);
    container.appendChild(card);
});