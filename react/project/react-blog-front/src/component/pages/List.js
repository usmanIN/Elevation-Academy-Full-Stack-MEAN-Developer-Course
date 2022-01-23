import React from 'react';

import { useParams , Link} from 'react-router-dom';


function List(){

    const {topicName} = useParams();
    
    return(
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-8'>
                        <h1>{topicName.charAt(0).toUpperCase() + topicName.slice(1)}</h1>
                        <div className=' d-flex flex-column'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <img src='' alt='demo' />                                    
                                </div>
                                <div className='col-lg-8'>
                                    <h4>Catches the waves with an adventure guide</h4>
                                    <p>When you click on any article , the article reading page will open Reading page you will have following options:</p>
                                    <Link to={"/"+topicName+"/catcehs-the-waves"} >Catches the waves with an adventure guide</Link>
                                    <p>Travel / {Date('y-m-d')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <h1>Top Post</h1>
                        <div className=' d-flex flex-column'>
                            <div className='card'>
                                <div className='card-body'>
                                 <h4 className="card-title">John Doe</h4>
                                </div>
                            </div>
                            <div className=''>
                                 <img src='' alt="text demo"/>
                                 <h4>Catches the waves with adventure guide</h4>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>

        </>
        
    )
}
export default List;