// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 기본 스타일 (선택 사항)
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
