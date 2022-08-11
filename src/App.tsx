import React from 'react';
import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Container from './components/Container';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import Tile from './components/Tile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Container children={(data) => <Tile data={data} />} />
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
