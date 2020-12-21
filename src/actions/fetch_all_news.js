import DataService from "../services/service";
import { FETCH_All_NEWS } from "./actionType";

export function fetchAllNews() {
  return function (dispatch) {
    DataService.getAllNews()
      .then((res) => {
        let data = res.data;
        dispatch({ type: FETCH_All_NEWS, payload: data });
        
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

