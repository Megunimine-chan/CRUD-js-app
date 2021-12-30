import http from "../http-common";

const getAll = () => {
  return http.get("/sportsmens");
};

const get = id => {
  return http.get(`/sportsmens/${id}`);
};

const create = data => {
  return http.post("/sportsmens", data);
};

const update = (id, data) => {
  return http.put(`/sportsmens/${id}`, data);
};

const remove = id => {
  return http.delete(`/sportsmens/${id}`);
};

const removeAll = () => {
  return http.delete(`/sportsmens`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
