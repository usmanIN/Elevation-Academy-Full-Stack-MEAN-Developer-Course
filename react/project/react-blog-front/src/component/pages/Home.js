import React, { useContext } from 'react';
import {ContentAPI} from '../context/contentAPI';
import { Link} from 'react-router-dom';
import image from '../download.jpg';
function Home(){
    const [record] = useContext(ContentAPI);

    //console.log(record[0]);
    
    return(
        <>
            <div className="container  my-3">
                <div className='row'>
                    <div className='col-lg-8'>

                        <h1 className=''>The Sound cloud you loved is doomed</h1>
                    </div>
                    <div className='col-lg-4 d-flex flex-column'>
                        <h1 className=''>The Sound cloud you loved is doomed</h1>
                        <h1 className=''>The Sound cloud you loved is doomed</h1>
                    </div>
                </div>            
            </div>
            {/* The Latest */}
            <div className='container my-3'>
                <h2>The Latest</h2>
                <div className='d-flex justifiy-content-start small-row-column'>
                    {
                        record.slice(0,3).map( (item, index) => <div className='card card mx-2' key={index}>
                        <img src={image} alt={item.title} />                        
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link to={item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>
                            </h4>
                            <p className="card-text">{item.description.split(" ").slice(0,30).join(" ")}.</p>                            
    
                        </div>
                    </div>)
                    }
                    
                </div>                
            </div>

            {/* Latest Articles */}
            <div className='container my-3'>
                <h3>Latest Articles</h3>
                <div className='row'>
                    <div className='col-lg-8 d-flex flex-column'>
                    {
                        record.slice(0,10).map( (item, index) => <div className='card' key={index}>                        
                        <img src="" alt={item.title} />                        
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link to={item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>                     
                            </h4>
                            <p className="card-text">{item.description.split(" ").slice(0,20).join(" ")}.</p>                            
                        </div>
                    </div>)
                    }

                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <p>Adverstivment</p>
                            </div>
                        </div>
                        <h2>Top Posts</h2>
                        <div className='card'>
                            <div className='card-body'>
                                <p>{record[0].title}</p>
                            </div>
                        </div>
                        {
                            record.slice(1,5).map( (item, index) => <div className='card' key={index}>                        
                            
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>                     
                                </h4>
                                <p className="card-text">{item.category} {item.date}</p>                            
                            </div>
                        </div>)
                        }
                        
                    </div>
                </div>
            </div>

            {/* Lastest Stories */}
            
            <div className='container my-3'>
                <h2>Latest Stories</h2>
                <div className='d-flex justifiy-content-start small-row-column'>
                {
                        record.slice(0,3).map( (item, index) => <div className='card mx-2' key={index}>                        
                        <img src="" alt={item.title} />                        
                        <div className="card-body">
                            <h4 className="card-title">
                            <Link to={item.category.toLowerCase()+"/"+item.slug} >{item.title}</Link>
                            </h4>
                            <p className="card-text">{item.description.split(" ").slice(0,20).join(" ")}.</p>       
                            <p className="card-text">{item.category} {item.date}</p>                                                 
                        </div>
                    </div>)
                    }
                    
                </div>                
            </div>
        </>        
    )
}
export default Home;