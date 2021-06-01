import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from './button.jsx';

const App = () => {
  return(<>
    <Input/><Input/><Input/>
    <Button label="hi"/>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
