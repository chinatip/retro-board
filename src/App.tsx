import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { Board } from './components/Board';

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <div className="App">
          <Board />
        </div>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
