import axios from 'axios';

const baseUrl = 'http://localhost:8000/';

const headers = { headers: { Authorization: `Bearer ${localStorage.tokenObj ? localStorage.tokenObj.token : ''}` } };

export const unauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

export const authenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data, headers);
  return response;
};

export const GetActivityRequest = async method => {
  const response = await axios[method](`${baseUrl}/activities`, headers);
  return response;
};

export const CreateActivityRequest = async (method, data) => {
  const response = await axios[method](`${baseUrl}/activities`, data, headers);
  return response;
};

export const DeleteActivityRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/activities/${id}`, headers);
  return response;
};

export const LoadMeasurementRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/activities/${id}/measurements`, headers);
  return response;
};

export const CreateMeasurementRequest = async (method, data, id) => {
  const response = await axios[method](`${baseUrl}/activities/${id}/measurements`, data, headers);
  return response;
};
