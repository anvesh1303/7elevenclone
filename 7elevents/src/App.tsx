import Routing from "./components/Routing";
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing/>
      </Provider>
      
    </div>
  );
}

export default App;
