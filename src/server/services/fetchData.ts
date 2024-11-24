import axios from 'axios';

export async function fetchDataFromOda() {
  const query = 'https://oda.ft.dk/api/Sag?$filter=(typeid eq 3 or typeid eq 5 or typeid eq 9) and periodeid eq 160';
  try {
    const response = await axios.get(query);
    return response.data.value; 
  } catch (error) {
    console.error('Error fetching data from ODA API:', error);
    throw error;
  }
}