import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Container from './components/Container';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import Tile from './components/Tile';
import {Button} from '@mui/material';

const queryClient = new QueryClient();

function App() {

  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Kliknięto ${state} razy`;
  })

  const getRandomized = () => {
    console.log(Math.random());
  }

  useMemo(() => getRandomized(), [count]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button onClick={() => setState(state + 1)}>Klik</Button>
          <Button onClick={() => setCount(count + 1)}>Klik 1</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/*<Container children={(data) => <Tile data={data} />} />*/}
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
