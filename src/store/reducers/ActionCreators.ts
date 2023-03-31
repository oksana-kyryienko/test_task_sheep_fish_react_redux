import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  } catch (error: any) {

  }
};
export function init(): any {
  throw new Error('Function not implemented.');
}