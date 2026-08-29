const BASE_URL = import.meta.env.DEV
  ? "https://newsapi.org/v2/everything"
  : "https://nomoreparties.co";

const API_KEY = "d0952e3adac34c8ca6eae59956b85caf"; 

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const searchNews = (keyword) => {
  const currentDate = new Date();
  
  // Calculate the date exactly 7 days before today
  const priorDate = new Date();
  priorDate.setDate(currentDate.getDate() - 7);

  // Format dates to standard ISO strings (YYYY-MM-DD) expected by News API
  const toDateString = currentDate.toISOString().split('T')[0];
  const fromDateString = priorDate.toISOString().split('T')[0];

  const url = `${BASE_URL}?q=${encodeURIComponent(keyword)}&from=${fromDateString}&to=${toDateString}&pageSize=100&apiKey=${API_KEY}`;

  return fetch(url, {
    method: "GET",
  }).then(checkResponse);
};
