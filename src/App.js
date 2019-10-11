import './App.css';
import 'typeface-roboto';

import React from 'react';
import counterState from './store/countStore';

import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'

function App() {

      return (
        <div>
          <Counter1 store={counterState}/>
          <Counter2 store={counterState}/>
        </div>
      );
}

export default App;



