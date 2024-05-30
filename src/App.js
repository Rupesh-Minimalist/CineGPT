import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {Provider} from "react-redux";
import appStore from './redux/appStore';

function App() {
  return (
    <div className=''>
        <Provider store={appStore}>
          
          <Body/>
        </Provider>
    </div>
  );
}

export default App;
