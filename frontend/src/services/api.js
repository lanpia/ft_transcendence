// src/services/api.js

const API_BASE_URL = '/api';

export async function fetchUserData() {
  try {
    const response = await fetch(`${API_BASE_URL}/user`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
