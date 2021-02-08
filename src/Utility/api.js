import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const headers = (tokenObj = JSON.parse(localStorage.getItem('tokenObj')).token) => ({ headers: { Authorization: `Bearer ${tokenObj}` } });

export const unauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

export const GetActivityRequest = async (method, token) => {
  const response = await axios[method](`${baseUrl}/activities`, headers(token));
  return response;
};

export const CreateActivityRequest = async (method, data, token) => {
  const response = await axios[method](`${baseUrl}/activities`, data, headers(token));
  return response;
};

export const DeleteActivityRequest = async (method, id, token) => {
  const response = await axios[method](`${baseUrl}/activities/${id}`, headers(token));
  return response;
};

export const LoadMeasurementRequest = async (method, id, token) => {
  const response = await axios[method](`${baseUrl}/activities/${id}/measurements`, headers(token));
  return response;
};

export const CreateMeasurementRequest = async (method, data, id, token) => {
  const response = await axios[method](`${baseUrl}/activities/${id}/measurements`, data, headers(token));
  return response;
};
