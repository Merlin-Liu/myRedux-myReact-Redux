import React from 'react'
import ReactDOM from 'react-dom'
// , applyMiddleware, compose
import { createStore, applyMiddleware} from './woniu-redux'
import thunk from './woniu-redux-thunk'
import arrThunk from './woniu-redux-array'
import { counter } from './index.redux'
import { Provider } from './woniu-react-redux';
import App from './App'


const store = createStore(counter, applyMiddleware(arrThunk, thunk))
ReactDOM.render(
  (
      <Provider store={store}>
        <App />
      </Provider>
  ),
  document.getElementById('root')
)






