import axios from 'axios';

axios.defaults.baseURL = 'https://64aad75d0c6d844abedee68e.mockapi.io/';

export const addMaterial = async values => {
  const { data } = await axios.post('/materials', values);
  return data;
};

export const getMaterials = async () => {
  const { data } = await axios.get('/materials');
  return data;
};

export const deleteMaterial = async id => {
  const { data } = await axios.delete(`/materials/${id}`);
  return data;
};

export const updateMaterial = async fields => {
  const { data } = await axios.put(`/materials/${fields.id}`, fields);
  return data;
};
