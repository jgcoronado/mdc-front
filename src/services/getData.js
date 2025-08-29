import axios from 'axios';
import { ref } from 'vue'

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getDetailData(page,route) {
  const { id } = route.params;
  const apiUrl = `${BASE_URL}/${page}/${id}`;
  
  const res = await axios.get(apiUrl);
  return res.data;
};

export async function getListData(page,route) {
  const { query } = route.params;
  const apiUrl = `${BASE_URL}/${page}/search?${query}`;
  
  const res = await axios.get(apiUrl);
  return res.data;
};