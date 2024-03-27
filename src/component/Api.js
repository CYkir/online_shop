
const API_URL = 'https://hplussport.com/api/products/order/price';
export  const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

