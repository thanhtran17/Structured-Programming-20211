import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2MwODU0ODY5ZWVhNDMyZmMzMzJjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTIyNzc0NiwiZXhwIjoxNjQ0MDc4OTQ2fQ.PwN5DPDMcodMVVNCe1BrHOdsVK1zmlYlRPSIlRBj8Kg';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
