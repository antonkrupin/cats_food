import React from 'react';
import i18n from './asserts/i18';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">{i18n.t('pageTitle')}</h1>
    </div>
  );
}

export default App;
