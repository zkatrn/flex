import * as React from 'react';
import './style.css';
import Flex from './components/flex';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Flex>
        <Flex>1</Flex>
        <Flex>2</Flex>
        <Flex>3</Flex>
      </Flex>
    </div>
  );
}
