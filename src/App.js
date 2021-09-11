



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 


import ProfilePage from './components/ProfilePage';

import MessageSingle from './components/MessageSingle';
import HomePage from './components/HomePage';
import { BrowserRouter  as Router ,Route} from 'react-router-dom';




function App() {
  return (

   
  

  <>  
        <Router>
        
            <div className="App">
              
              <Route path='/profile' exact component= {ProfilePage} />
              <Route path='/' exact component={HomePage} />
              <Route path='/message' exact component={ MessageSingle} />
            </div>  
           
          </Router>
   </>
   );
 }



export default App;
