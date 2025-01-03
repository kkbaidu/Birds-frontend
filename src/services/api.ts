import axios from "axios";

export const fetchBirds = () =>
  axios.get("https://birds-backend-gle5.onrender.com/birds");
export const updateBird = (id: string, data: any) =>
  axios.put(`https://birds-backend-gle5.onrender.com/birds/${id}`, data);
export const deleteBird = (id: string) =>
  axios.delete(`https://birds-backend-gle5.onrender.com/birds/${id}`);
