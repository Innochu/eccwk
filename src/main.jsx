import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from "./App"
import { Provider } from 'react-redux'
import mystore from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={mystore}>
    <App/>
  </Provider>
  </React.StrictMode>,
)
