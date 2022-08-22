import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import logo from './../../logo.svg';
import './Home.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Button} from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";
import Hooks from '../hooks/Hooks';
import Fetching from '../fetching/Fetching';

const queryClient = new QueryClient();

const context = {
  good: ':happy',
  bad: ':sad',
}

const MyContext = createContext(context);


function App() {

  useEffect(() => {
    document.title = `Kliknięto ${state} razy`;

    return () => alert('Bye');
  }, []);

  const getRandomized = () => {
    return count ** 3;
  }

  const getRandomizedCallback = () => {
    alert('Test');
  }
  const [test, setTest] = useState();
  const [state, setState] = useState(0);

  const [count, setCount] = useState(0);
  //componentShouldUpdate
  // componentDidUpdate

  // componentWillUnmount

  const callback = useCallback(getRandomizedCallback, [count])
  const memoized = useMemo(getRandomized, [count]);
  const happy = useContext(MyContext)

  return (
    <MyContext.Provider value={context}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>

            <Button onClick={() => setState(state + 1)}>Klik</Button>
            <Button onClick={() => setCount(count + 1)}>Klik 1</Button>
            <button onClick={() => console.log('test')}>dsadasdsa</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h1 style={{color: 'white'}}>{memoized}</h1>
          </header>
        </div>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </MyContext.Provider>
  );
}

export default App;
