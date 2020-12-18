import React from 'react'
import {useState} from "react";
import CardUI from './cardUI';

export default function SearchByCategories(props) {


 const [category, setCategory] = useState()
 const [filteredNews, setfilteredNews] = useState()


    const getCategory = (e) => {
        console.log(category);
        e.preventDefault();
        if(category === "" || category === "nothing" ){
            console.log("There is no source selected");
        }else{
            // console.log("Check news from props"+JSON.stringify(props.news.filter(item => item.c_id === city)));
             setfilteredNews(props.news.filter(item => item.c_id === parseInt(category)));
            console.log("From filtered"+(filteredNews))
        }
    }
    
    let news;
    if(filteredNews !== undefined){
        if(filteredNews.length >0){
      news = <CardUI data={filteredNews}></CardUI>          
        }
    else{
        news = <p>News Will Appear Soon!</p>
    }
}

console.log("Check"+JSON.stringify(props.categories));
console.log("scdjcc"+JSON.stringify(filteredNews));
    return (
        <React.Fragment>
        
            
                <hr/>
             <form onSubmit = {getCategory} >
                
                    <label>Category</label>
                    <select onChange = {e => setCategory(e.target.value)}>
                        <option value="nothing">Select an option...</option>
                        {
                            props.categories.map(x => {
                                return(
                                    <option key={x.cat_id} value={x.cat_id}>{x.cat_name}</option>
                                )
                            })
                        }
                    </select>

                    <input type="submit" value="Search" />
                
             </form>   
                    {/* <div>
                    
                    {
                    filteredNews.map(x => {
                            return (
                                <div className="post" key={x.n_id}> 
                                <img src={x.image} alt={x.title} />
                                    <h2>{x.content}</h2>
                                    
                                </div>
                            )
                        }) 
                    }
                    </div> */}
                    {news}
    </React.Fragment>
    )
}
