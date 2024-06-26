import Body from './components/Body';
import {Provider} from "react-redux";
import appStore from './redux/appStore';
import './index.css';

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
