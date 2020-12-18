const fetchAllCategories= (state={allcategories:[]}, action)=>{
    
    switch(action.type) {
        case "FETCH_All_CATEGORIES":
            return{            
                ...state,
                allcategories: action.payload
                
            };
    
        // case "FILTER_NEWS_BY_CITY":
        //     return {
        //         ...state,
        //         newByCity: action.payload
        //     }
        default:
            return state

    };

}
export default fetchAllCategories;