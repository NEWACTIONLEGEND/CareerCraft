import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Hello} from "./components/Hello.jsx"
import {Data} from './components/Data_sample.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="main">
            <Hello/>
            <Data/>
        </div>
    </React.StrictMode>
);
