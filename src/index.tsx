import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './Home/Homepage';
import store from './tools/store';
import {Provider} from 'react-redux';
import { Reset } from 'styled-reset';

ReactDOM.render(
  <Provider store={store}>
    <Reset />
      <App/>
      <MainPage />
  </Provider>,
  document.getElementById('root')
);