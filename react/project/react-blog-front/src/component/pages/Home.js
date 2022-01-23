import React from 'react';

function Home(){
    return(
        <>
            <div className="container">
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
            <div className='container'>
                <h2>The Latest</h2>
                <div className='d-flex justifiy-content-start'>
                    <div className='card'>                        
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>                            
                        </div>
                    </div>
                </div>                
            </div>

            {/* Latest Articles */}
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 d-flex flex-column'>

                    </div>
                    <div className='col-lg-4'>

                    </div>
                </div>
            </div>

            {/* Lastest Stories */}
            
            <div className='container'>
                <h2>Latest Stories</h2>
                <div className='d-flex justifiy-content-start'>
                    <div className='card'>                        
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>                            
                        </div>
                    </div>
                </div>                
            </div>
        </>        
    )
}
export default Home;