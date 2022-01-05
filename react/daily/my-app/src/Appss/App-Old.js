
import './App.css';
// import Header from './component/Header';
// import Body from './component/Body';
// import Welcome from './component/Welcome';
// import style from './component/style.module.css';
// import Footer from './component/Footer';
// import {Sum,Sub,Mul} from './component/day-5/daily/exportExample';

// Task-1

import ClassComponent from './component/task-1/classComponent';
import FunctionComponent from './component/task-1/functionComponent';


// Day 6
//import ClassComponent from './component/day-6/classComponent'; 
//import LifeCycle from './component/day-6/LifeCycle'; 

//Day 8
// import Header from "./component/day-8/Header";
// import Home from "./component/day-8/Home";
// import About from "./component/day-8/About";
// import Contact from "./component/day-8/Contact";
// import Product from "./component/day-8/Product";
// import Mobile from "./component/day-8/Mobile";
// import ProductDesc from "./component/day-8/ProductDesc";
// import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
// import PageNotFound from './component/day-8/PageNotFound';


function App() {  
  return (
    <div className="App">

    {/* Day 7 
    <Router>
      <Header />
        <Routes>          
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='mobile' element={<Mobile/>}>
              <Route path=':mobileName' element={<ProductDesc />}/>
            </Route>
          </Route>
          <Route path='/*' element={<PageNotFound/>} />
        </Routes>
    </Router>*/}

    {/* Day 6 <LifeCycle />    */}
    
    <h1>Styling Funciton and Component </h1>    
        
      <div className='row'>
        <div className='column'>
            <ClassComponent />  
        </div>
        <div className='column'>
            <FunctionComponent />    
        </div>
      </div>  


    {/* Day 5 
        <Sum />
        <Sub />
        <Mul />
      </div> 
       <EventExample />        
      <Header state="UP" />
      <Body>
          <p>Nothing</p>
      </Body>
      <Welcome firstName="Captian" lastName="America" />
      <Footer />  <h1 className={style.success}> module css </h1> */}


    </div>
  );
}

export default App;
