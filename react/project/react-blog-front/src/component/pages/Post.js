import React, { useContext } from 'react';
import { useParams , Link} from 'react-router-dom';
import {ContentAPI} from '../context/contentAPI';
import '../../App.css';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function Post(){

    const [record] = useContext(ContentAPI);
    const {postName} = useParams();
    let content = record.filter(function(item){ return (item.slug===postName) })[0];
    let similar = record.filter(function(item){ return (item.category.toLowerCase()===content.category.toLowerCase()) });
    

    return(
        <>
            <div className="mx-auto container">
                <div className='row'>
                    <div className='col-lg-2'></div>                    
                    <div className='col-lg-8'>
                        <div className='my-4' style={{margin:"10% 0"}}>
                            <h1>{content.title}</h1>                  
                            <p className='float-right'>Published on{   content.date}</p>
                        </div>
                        

                        <img src={content.image} alt={content.title} className='post-image'/>
                        <p className='content-text'>{content.description}</p>                            
                    </div>                        
                    <div className='col-lg-2'></div>
                </div>      
            </div>
            <div className='mx-auto container'>
                <h4 className='my-4'>More from the siren</h4>
                <div className='d-flex justify-content-start small-row-column'>
                    {
                        shuffle(similar).slice(0,3).map(function(item,index){
                                return (
                                    <div className='card mx-2 card-list' style={{width:"33.33%"}} key={index}>
                                        <div className='card-body'>
                                        <img src={item.image} className='img-thumbnail mb-3' alt={item.title} style={{width:"100%",height:"200px"}}/>                        
                                            <h4 className='card-text'>
                                                <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} className='link-item' >{item.title}</Link>
                                            </h4>
                                            <p>{item.description.split(" ").splice(0, 20).join(" ")}</p>
                                        </div>                        
                                    </div>
                                )
                            
                        })
                    }                    
                </div>
            </div>
        </>
        
    )
}
export default Post;