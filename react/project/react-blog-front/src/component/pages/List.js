import React, { useContext } from 'react';
import {ContentAPI} from '../context/contentAPI';

import { useParams , Link} from 'react-router-dom';

function List(){

    const {topicName} = useParams();
    const [record] = useContext(ContentAPI);

    //record.map( (item) => console.log(item.category.toLowerCase(), topicName) );
    
    return(
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-8'>
                        <h1>{topicName.charAt(0).toUpperCase() + topicName.slice(1)}</h1>
                        <div className=' d-flex flex-column'>
                            {
                                record.map(function(item,index){
                                    if(item.category.toLowerCase()==topicName.toLowerCase()){
                                        return (<div className='row mb-3' key={index}>
                                            <div className='col-lg-4'>
                                                <img src='' alt='demo' />                                    
                                            </div>
                                            <div className='col-lg-8'>
                                                <h4>
                                                    <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>
                                                </h4>
                                                <p className="card-text">{item.description.split(" ").slice(0,30).join(" ")}.</p>                                                
                                                <p>{item.category} {item.date}</p>
                                            </div>
                                        </div>)                                
                                    }
                                }
                                )
                            }
                            
                        </div>
                    </div>
                    <div className='col-lg-4'>                   
                        <h2>Top Posts</h2>
                        {
                            record.slice(0,5).map(function(item, index){ 
                                if(index < 1){
                                    return (<div className='card' key={index}>                        
                                    <div className="card-body">
                                        <img src='' alt={item.title} />
                                        <h5 className="card-title">
                                            <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>                     
                                        </h5>
                                        <p className="card-text">{item.category} {item.date}</p>                            
                                    </div>
                                </div>)
                                }else{
                                    return (<div className='card' key={index}>                        
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>                     
                                        </h5>
                                        <p className="card-text">{item.category} {item.date}</p>                            
                                    </div>
                                </div>)
                                }
                            
                            })
                        }
                        <div className='card'>
                            <div className='card-body'>
                                <p>Adverstivment</p>
                            </div>
                        </div>                        
                    </div>               
                </div>                    
            </div>

        </>
        
    )
}
export default List;