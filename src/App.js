import logo from './logo.svg';
import './App.css';
import Likes from './likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';
import {useSelector} from 'react-redux'

function App() {
  const error = useSelector(state => state.appReducer.error)
  return (
    <div>
      <div className="App">
        {error && (
          <div className="error-message">
            {error}
          </div> 
        )}
        <Spin/>  
        <Title/>
        <Likes />
      </div>
        <Comments/>
    </div>
  );
}

export default App;
