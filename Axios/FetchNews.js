import React ,{useState} from "react";
import axios from 'axios'
function FetchNews()
{
    const[news, setNews]=useState([])
    const FetchNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=edd78f184d794a728affe6a1d21f4553")
        .then((response)=>{
setNews(response.data.articles)
        })
    }
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-4">
        <button className='btn-btn-primary' onClick={FetchNews}>FetchNews</button>
        
  </div>
</div>
</div>

<div className="container">
    <div className="row">
        {
            news.map((value)=>{
                return(
                    <div className="col-4">
                <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <a href="#" className="btn btn-primary">{value.url}</a>
        </div>
    </div> </div>
    
            );    
            })
        }
           </div></div>  
        </>
    );
}
export default FetchNews