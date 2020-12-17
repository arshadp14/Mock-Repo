import TutorialDataService from "../services/tutorial.service";
import {FETCH_All_NEWS} from './actionType'

export function fetchAllNews(){
         
        return function(dispatch){
            TutorialDataService.getAllNews()
            .then(res => {
                let data = res.data;
                dispatch({type:FETCH_All_NEWS, payload: data});
                console.log("From action"+data);
                 return data;
                
                
            })
            .catch(err => {
                console.log(err);
            })
      
         }
      
}

export const filterNewsByCity = (news,cityid)=>(dispatch)=>{
    dispatch({
        type: "FILTER_NEWS_BY_CITY",
        payload:{
            cityid:cityid,
            items: cityid === "" ? news:
            news.filter(x=>x.cityid.indexOf(cityid)>=0),
        },
    });
}
