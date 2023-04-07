/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products'
    );

    return response.data;
  } catch (error) { /* empty */ }
};

export function init(): any {
  throw new Error('Function not implemented.');
}