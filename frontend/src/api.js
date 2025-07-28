import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/users';

export const fetchUsers = () => axios.get(API_BASE);
export const createUser = (name) => axios.post(API_BASE, { name });
export const claimPoints = (id) => axios.post(`${API_BASE}/claim/${id}`);
export const fetchLeaderboard = () => axios.get(`${API_BASE}/leaderboard`);
