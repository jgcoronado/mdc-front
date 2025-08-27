import axios from 'axios';
import { ref } from 'vue'

const apiData = ref('');


export async function getApiData(route) {
  const id = route.params.id;
  const apiUrl = `http://localhost:3000/banda/${id}`;
  
  await axios.get(apiUrl)
    .then((response) => {
    console.log("🚀 ~ getApiData ~ response:", response.data)
    return response;
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
    return error;
  });
};