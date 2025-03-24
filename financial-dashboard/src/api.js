import axios from 'axios';

const COIN_GECKO_API = 'https://api.coingecko.com/api/v3/';
const ALPHA_VANTAGE_API = 'https://www.alphavantage.co/query?';

export const fetchCryptoData = async (coinId) => {
    const response = await axios.get(`${COIN_GECKO_API}simple/price?ids=${coinId}&vs_currencies=usd`);
    return response.data;
};

export const fetchStockData = async (symbol, apiKey) => {
    const response = await axios.get(`${ALPHA_VANTAGE_API}function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
    return response.data;
};

