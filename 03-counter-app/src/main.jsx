import React from 'react';
import ReactDOM  from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css'
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp /> */}
        <CounterApp value={1000} />
    </React.StrictMode>
);