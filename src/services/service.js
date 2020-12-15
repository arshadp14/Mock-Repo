import http from "../http-common";

class DataService {
  // getAll() {
  //   return http.get("/news");
  // }

  findAllNewsByCity() {
    return http.get("/news/city");
  }

  findAllNewsbyReporter() {
    return http.get("/news/reporter");
  }

  findAllCategories() {
    return http.get("/category");
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  createUser(data) {
    return http.post("/users", data);
  }

  createNews(data) {
    return http.post("/news", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }
}

export default new DataService();
