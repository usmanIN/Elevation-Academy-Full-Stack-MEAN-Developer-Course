import React from 'react';

import { useParams} from 'react-router-dom';


function Post(){

    const {postName} = useParams();
    return(
        <>
            <div className="mx-auto container">
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <h1>{postName}</h1>            
                        <img src='' alt='demo image' style={{width:"100%", height:"100px"}} />
                        <div className='col-lg-8'>
                            <h4>Catches the waves with an adventure guide</h4>
                            <p>When you click on any article , the article reading page will open Reading page you will have following options:</p>
                            <p>Travel / {Date('y-m-d')}</p>
                        </div>  
                    </div>
                    <div className='col-lg-2'></div>
                </div>      
            </div>
            <div className='mx-auto container'>
                <h4>More from the siren</h4>
                <div className='d-flex flex-wrap justify-content-start'>
                    <div className='card'>
                        <div className='card-body'>
                            <img al="demo" />
                            <h4 className='card-text'>Joseph Tree Overnight Adventure</h4>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default Post;