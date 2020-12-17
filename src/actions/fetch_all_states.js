import TutorialDataService from "../services/tutorial.service";
import {FETCH_All_STATES} from './actionType';

export function fetchAllStates(){
    
        return function(dispatch){
            TutorialDataService.getAllStates()
            .then(res => {
                let data = res.data;
                dispatch({type:FETCH_All_STATES, payload: data});
                console.log("From action"+data);
                 return data;
                
                
            })
       
            .catch(err => {
                console.log(err);
            })
      
         }
      
}
