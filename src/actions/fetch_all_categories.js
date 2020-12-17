import TutorialDataService from "../services/tutorial.service";
import {FETCH_All_CATEGORIES} from './actionType';

export function fetchAllCategories(){
    
        return function(dispatch){
            TutorialDataService.getAllCategories()
            .then(res => {
                let data = res.data;
                dispatch({type:FETCH_All_CATEGORIES, payload: data});
                console.log("From action"+data);
                 return data;
                
                
            })
       
            .catch(err => {
                console.log(err);
            })
      
         }
      
}
