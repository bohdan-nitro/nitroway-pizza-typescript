import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// import store from "./redux/store";

import {store} from "./reduxToolkit/store"


import {BrowserRouter} from "react-router-dom";

import "./scss/app.scss"

import App from './App';


const rootElem = document.getElementById('root');



ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
              <App/>
          </Provider>
      </BrowserRouter>,
  rootElem
);

