// src/api.js
//import { BACKEND_URL } from "./config";
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getProducts = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/products`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

export const getTeam = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/team`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching team:", err);
    return [];
  }
};

export const getSales = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/sales`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching sales:", err);
    return {};
  }
};
