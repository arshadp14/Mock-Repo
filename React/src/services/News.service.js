import http from "../http-common";

class NewsDataService {
 
  getUserByEmail(email) {
    return http.get(`/users/${email}`);
  }
  updatePassword(email,data){
    return http.put(`/users/${email}/${data}`);
  }
 
}

export default new NewsDataService();
