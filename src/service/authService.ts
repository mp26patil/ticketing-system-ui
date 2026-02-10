import api from "../api/axios";

export const login = async (username: string, password: string) => {
  // Implementation for login
  const response = await api.post('http://localhost:9090/api/v1/auth/login', {
    username,
    password,
  });
  const { token } = response.data
  localStorage.setItem('token', token);
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem('token');
};