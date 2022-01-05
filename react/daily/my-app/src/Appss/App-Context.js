
import './App.css';
import { StudentContext, StudentProvider } from './component/ContextApi/StudentContext';
import StudentList from './component/ContextApi/StudentList';
import StudentStatus from './component/ContextApi/StudentStatus';

function App() {  
  return (
    <StudentProvider>
      <div className="App">
          <StudentStatus/>
          <StudentList />
      </div>
    </StudentProvider>
    
  );
}

export default App;
