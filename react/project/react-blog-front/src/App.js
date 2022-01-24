import Header from './component/Header';
import {BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';

import Home from './component/pages/Home';
import List from './component/pages/List';
import Post from './component/pages/Post';
import {Record} from './component/context/contentAPI';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Record>
        <Header />        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:topicName" element={<List />} />
            <Route exact path="/:topicName/:postName" element={<Post />} />       
            <Route exact path='/*' element={(<>
              <div className='container justify-content-center text-center my-5 text-muted'>
                <h1>404! NOT FOUND</h1>
              </div>
            </>)} />       
          </Routes>
          </Record>
      </BrowserRouter>


    </div>
  );
}

export default App;
