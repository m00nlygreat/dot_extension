import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from './button.jsx';

const App = () => {
  return(<>
    <Input/><Input/>
    <div>
      <Input/>
      <Button label="put."/>
    </div>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));