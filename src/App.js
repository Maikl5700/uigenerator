import './App.css';
import 'typeface-roboto';

import React from 'react';
// import counterState from './store/countStore';

// import Counter1 from './components/Counter1'
// import Counter2 from './components/Counter2'
// import { Provider } from 'mobx-react'
import Grid from './components/GGrid'
import schema from './schema'

function App() {

  return (
    <div>
      <Grid schema={schema} />
      {/* <Provider store={counterState}>
        <Counter2 />
        <Counter1 />
      </Provider> */}
    </div>
  );
}

export default App;



