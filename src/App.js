import React from 'react';
import './App.css';
import 'typeface-roboto';

import GGrid from './components/GGrid'
import schema from './schema'

function App() {
  return (
    <GGrid schema={schema}/>
  );
}

export default App;
