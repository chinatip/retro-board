import { ChakraProvider } from '@chakra-ui/react';
import { Board } from './components/Board/Board';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Board />
      </div>
    </ChakraProvider>
  );
}

export default App;
