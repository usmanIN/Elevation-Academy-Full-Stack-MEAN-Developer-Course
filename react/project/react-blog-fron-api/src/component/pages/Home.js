import React,{useContext} from 'react';
// import {ContentAPI} from '../context/contentAPI';
import { Link} from 'react-router-dom';
import '../../App.css';
import imageFirst from '../images/istockphoto.jpg';
import imageSecond from '../images/maxresdefault.jpg';


function Home(){
    // const [record] = useContext(ContentAPI);
    const [record,setRecord] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        let url = "https://react-blog-api-project.herokuapp.com";
        fetch(url+"/api/")
        .then(response => response.json())
        .then(result => {
            // console.log(result.data);
            result.data.map((item) => {
                item.image = url + item.image
            });            

            setRecord(result.data);
            setLoading(false);
        })
        .catch(error => console.log(error))
            
    },[]);
    
    let num = Math.floor(Math.random() * record.length);
    let first = Math.floor(Math.random() * record.length);
    let second = Math.floor(Math.random() * record.length);

    if(isLoading){
        return (
            <div>
                <h1>Loading ....</h1>
            </div>
        )
    }
    return(
        <>
            <div className="container  my-3">
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='card'>
                            <img src={record[num].image} alt={record[num].title}  className='image-main'/>
                            <div className='card-img-overlay'>
                                <p className='main-text'>{record[num].title}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-lg-4 d-flex flex-column '>
                        <div className='main-div mb-3'>
                            <img src={imageFirst} alt={record[first].title} className='image-second' />
                            <div className='main-text card-img-overlay'>                                
                                <p>{record[first].title}</p>
                            </div>
                        </div>
                        <div className='main-div'>
                        <img src={imageSecond} alt={record[second].title} className='image-second'/>
                            <div className='main-text card-img-overlay'>
                                <p>{record[second].title}</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
            {/* The Latest */}
            <div className='container my-4'>
                <h2>The Latest</h2>
                <div className='d-flex justifiy-content-start small-row-column'>
                    {
                        record.slice(0,3).map( (item, index) => <div className='card card-list mx-2' key={index}>
                        <img src={item.image} alt={item.title} style={{width:"100%",height:"200px"}}/>                        
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link to={item.category.toLowerCase()+"/"+item.slug} className='link-item' >{item.title}</Link>
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
                        record.slice(0,10).map( (item, index) => <div className='card mb-3 card-list' key={index}>           
                        <div className='row'>
                            <div className='col-lg-4'>
                            <img src={item.image} alt={item.title} style={{width:"80%",height:"150px"}}/>                        
                            </div>
                            <div className='col-lg-8'>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link to={item.category.toLowerCase()+"/"+item.slug} className='link-item' >{item.title}</Link>                     
                                    </h4>
                                    <p className="card-text">{item.description.split(" ").slice(0,20).join(" ")}.</p>                            
                                </div>                                
                            </div>
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
                                <img src={record[0].image} className='img-thumbnail' alt={record[0].title} style={{width:"100%",height:"200px"}}/>                                    
                                <p>{record[0].title}</p>
                            </div>
                        </div>
                        {
                            record.slice(1,5).map( (item, index) => <div className='card' key={index}>                        
                            
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={item.category.toLowerCase()+"/"+item.slug} className='link-item' >{item.title}</Link>                     
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
                        <img src={item.image} className='img-thumbnail' alt={item.title} style={{width:"100%",height:"200px"}}/>                        
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