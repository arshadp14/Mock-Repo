import React from 'react'
import DataService from "../services/service";
import {Card,CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CardUI(props) {


    // function updateCount(id,data){
   
    //     TutorialDataService.updateCount(id,data)
    //     .then(res => {
    //         let data = res.data;
    //         console.log("From action"+data);
    //          return data;  
    //     })
        
        
    // }
    


    return (
        <div>
              <React.Fragment>
            <section>
                <hr/>
                <h2>{props.type}</h2>
                <div className="news">
                    {props.data.map(x => {
                        return (
                           
                            <div className="post" key={x.n_id}> 
                                <img src={`../images/${x.image}`} alt=""/>
                                <h2>{x.title}</h2>
                                <p>{x.extract}</p>
                                <pre>Read {x.readcount} times    Posted :{x.postedon.slice(0,10)}</pre>
                                
                                {/* <a href={`api/news/update/${x.n_id}`} className="" role="button" >Read More</a> */}
                                <Link to={`/main/${x.n_id}`}>Read More</Link>
                            </div>
                            
                        )
                    })}
                </div>
                {/* <div className="news">
                    {props.city.map(x => {
                        return (

                            <div className="post" key={x.s_id}> 
                               
                                <h2>{x.s_name}</h2>
                             
                            </div>
                        )
                    })}
                </div> */}
            </section>
        </React.Fragment>
        {/* <h2>Most Read News</h2>
        {props.data.map(x=>{
            return(
                <React.Fragment>        
  <Card>
    <Card.Img variant="top" src={x.urlToImage} alt="" />
    <Card.Body>
      <Card.Title>{x.title}</Card.Title>
      <Card.Text>{x.description}</Card.Text>
      <a class="btn btn-primary" role="button" href={x.url}>Read More</a>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Posted on {x.publishedAt}</small>
      
    </Card.Footer>
  </Card>
  <hr/>
  </React.Fragment>

            )
        })}
         */}
        </div>
    )
}

export default CardUI
