import { useEffect } from 'react';
import { Container, SimpleList } from './components/Board';

function App() {
  useEffect(() => {
    SimpleList();
  });

  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
