import axios from 'axios';
import { ref } from 'vue'

const apiData = ref('');

export async function getDetailData(page,route) {
  const { id } = route.params;
  const apiUrl = `http://localhost:3000/${page}/${id}`;
  
  const res = await axios.get(apiUrl);
  return res.data;
};