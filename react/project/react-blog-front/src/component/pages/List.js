import React, { useContext } from 'react';
import {ContentAPI} from '../context/contentAPI';
import { useParams , Link} from 'react-router-dom';
import '../../App.css';
function List(){

    const {topicName} = useParams();
    const [record] = useContext(ContentAPI);
    
    return(
        <>
            <div className="container">


                <div className='row my-5'>
                    <div className='col-lg-8'>
                        <h1 style={{background:"#0d6efd", padding:"10px", color:"white", fontSize:"30px",marginBottom:"50px",width:"100%"}}>{topicName.charAt(0).toUpperCase() + topicName.slice(1)}</h1>
                        <div className=' d-flex flex-column'>
                            {
                                record.map(function(item,index){
                                    if(item.category.toLowerCase()===topicName.toLowerCase()){
                                        return (<div className='row mb-3 card-list' key={index}>
                                            <div className='col-lg-4'>
                                            <img src={item.image} className='img-thumbnail mb-3' alt={item.title} style={{width:"100%",height:"200px"}}/>                        
                                            </div>
                                            <div className='col-lg-8'>
                                                <h4>
                                                    <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} className='link-item' >{item.title}</Link>
                                                </h4>
                                                <p className="card-text">{item.description.split(" ").slice(0,30).join(" ")}.</p>                                                
                                                <p>{item.category} {item.date}</p>
                                            </div>
                                        </div>)                                
                                    }
                                    return "";
                                }
                                )
                            }
                            
                        </div>
                    </div>
                    <div className='col-lg-4'>                   
                        <h2 style={{background:"#0d6efd", padding:"10px", color:"white", fontSize:"25px",marginBottom:"50px",width:"100%"}}>Top Posts</h2>
                        {
                            record.slice(0,5).map(function(item, index){ 
                                if(index < 1){
                                    return (<div className='card' key={index}>                        
                                    <div className="card-body">
                                    <img src={item.image} className='img-thumbnail mb-3' alt={item.title} style={{width:"100%",height:"200px"}}/>                        

                                        <h5 className="card-title">
                                            <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} className='link-item' >{item.title}</Link>                     
                                        </h5>
                                        <p className="card-text">{item.category} {item.date}</p>                            
                                    </div>
                                </div>)
                                }else{
                                    return (<div className='card' key={index}>                        
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to={"/"+item.category.toLowerCase()+"/"+item.slug} className='link-item'>{item.title}</Link>                     
                                        </h5>
                                        <p className="card-text">{item.category} {item.date}</p>                            
                                    </div>
                                </div>)
                                }
                            
                            })
                        }
                        <br/><br/>
                        <div className='card' style={{height:"100vh"}}>
                            <div className='card-body'>
                                <h3>Adverstivment</h3>
                            </div>
                        </div>                        
                    </div>               
                </div>                    
            </div>

        </>
        
    )
}
export default List;