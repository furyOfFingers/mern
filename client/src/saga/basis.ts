import axios, { Method } from "axios";

const baseApi = "/api/auth/";

const baseRequestForm = (
  url: string,
  method: Method | undefined,
  body: any = null,
  headers = {}
) => {
  return axios(`${baseApi}/${url}`, {
    method,
  }).then((res) => {
    return res.data;
  });
};

export default baseRequestForm;
